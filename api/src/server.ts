import express from "express"
import http from "http"
import socketIO, { Server, Socket } from "socket.io"
import { Meeting, Message } from "./domain"
import { allowCrossDomain } from "./middlewares"
import { SocketEvent } from "./socket-event"
import { s3FileUploader } from "./s3-file-uploader"
import { ChatMessageMapper, MeetingMapper, ParticipantMapper } from "./mappers"

const app = express()
app.use(allowCrossDomain)

s3FileUploader(app)

export const httpServer = http.createServer(app)
export const io: Server = (socketIO as any)(httpServer)

const meetings = new Map<string, Meeting>()

function getOrCreateMeeting(
  meetingId: string,
  hostId: string,
  config: { facesEnabled: boolean } = { facesEnabled: true }
): Meeting {
  if (meetings.has(meetingId)) {
    return meetings.get(meetingId) as Meeting
  }
  const meeting = new Meeting(meetingId, hostId)
  meetings.set(meetingId, meeting)

  if (!config?.facesEnabled) {
    meeting.faces.disable()
  }

  return meeting
}

io.on("connection", (socket: Socket) => {
  socket.on(SocketEvent.CreateMeeting, ({ meetingId, id }) => {
    const meeting = meetings.get(meetingId)
    if (!meeting) {
      getOrCreateMeeting(meetingId, id)
    }
  })

  socket.on(
    SocketEvent.JoinMeeting,
    ({ meetingId, id, login, color, avatar, config }) => {
      const meeting = getOrCreateMeeting(meetingId, id, config)
      const participant = meeting.join(id, login)

      if (avatar) {
        participant.changeAvatar(avatar)
      }

      if (color) {
        participant.changeColor(color)
      }

      socket.join(id)
      socket.join(meetingId)

      socket
        .to(meeting.id)
        .emit(
          SocketEvent.ParticipantJoined,
          ParticipantMapper.mapToDTO(participant)
        )
      // fix me: authid
      socket.emit(
        SocketEvent.SyncMeetingState,
        MeetingMapper.mapToDTO(meeting, id)
      )

      socket.on(SocketEvent.SetMeetingLocked, ({ locked }) => {
        if (meeting.isHost(participant)) {
          if (locked) {
            meeting.lock()
          } else {
            meeting.unlock()
          }
          socket.to(meeting.id).emit(SocketEvent.SetMeetingLocked, { locked })
        }
      })

      socket.on(SocketEvent.ChatMessage, ({ text, attachments }) => {
        const message = new Message(participant.id, participant.login, text)
        if (attachments?.length) {
          message.setAttachments(attachments)
        }

        meeting.chat.sendMessage(message)
        socket
          .to(meeting.id)
          .emit(SocketEvent.ChatMessage, ChatMessageMapper.mapToDTO(message))
      })

      socket.on(
        SocketEvent.SetCodeShareTabContent,
        ({ code, changes = [] }) => {
          const isCodeLocked = !!meeting.codeShare.typingId
          const isLockedByMe =
            isCodeLocked && meeting.codeShare.typingId === participant.id
          if (meeting.locked) {
            return
          }

          if (isCodeLocked && !isLockedByMe) {
            return
          }

          socket.to(meeting.id).emit(SocketEvent.SetCodeTypingLocked, {
            id: participant.id
          })
          meeting.codeShare.lockTypingBy(participant, () => {
            socket.to(meeting.id).emit(SocketEvent.SetCodeTypingLocked, {
              id: null
            })
          })
          meeting.codeShare.editCode(code)
          socket.to(meeting.id).emit(SocketEvent.SetCodeShareTabContent, {
            code: meeting.codeShare.code,
            changes
          })
        }
      )

      socket.on(SocketEvent.SetCodeShareCursor, (position: any) => {
        meeting.codeShare.editCursor(participant.id, position)
        socket.to(meeting.id).emit(SocketEvent.SetCodeShareCursor, {
          participantId: participant.id,
          position
        })
      })

      socket.on(SocketEvent.SetCodeShareSelection, (selection: any) => {
        meeting.codeShare.editSelection(participant.id, selection)
        socket.to(meeting.id).emit(SocketEvent.SetCodeShareSelection, {
          participantId: participant.id,
          selection
        })
      })

      socket.on(SocketEvent.SetCodeShareLanguage, ({ language }: any) => {
        meeting.codeShare.editLanguage(language)
        socket.to(meeting.id).emit(SocketEvent.SetCodeShareLanguage, {
          language
        })
      })

      // Leave meeting
      socket.on(SocketEvent.Disconnecting, () => {
        meeting.leave(participant.id)
        socket.to(meeting.id).emit(SocketEvent.LeaveMeeting, {
          participantId: participant.id
        })
      })
    }
  )
})

httpServer.listen(8080, () => {
  console.log("listening on *:8080")
})
