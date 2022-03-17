import { Meeting, Message, Participant, UniqueID } from "./domain";
import { CodeShare } from "./domain/code/code-share";

export class MeetingMapper {
  static mapToDTO(meeting: Meeting, userId?: UniqueID) {
    return {
      id: meeting.id,
      hostId: meeting.hostId,
      participants: meeting.participants.map(ParticipantMapper.mapToDTO),
      chatMessages: meeting.chat.messages.map(ChatMessageMapper.mapToDTO),
      locked: meeting.locked,
      codeShare: CodeShareMapper.mapToDTO(meeting.codeShare),
      faces: {
        enabled: meeting.faces.enabled
      },
      plan: {
        steps: userId === meeting.hostId ? meeting.plan.steps.map(s => ({
          title: s.title,
          description: s.description,
          duration: s.duration,
          score: s.score
        })) : []
      }
    };
  }
}

export class ParticipantMapper {
  static mapToDTO(participant: Participant) {
    return {
      id: participant.id,
      login: participant.login,
      avatar: participant.avatar,
      color: participant.color,
      audio: participant.audio,
      video: participant.video
    };
  }
}

export class ChatMessageMapper {
  static mapToDTO(msg: Message) {
    return {
      senderId: msg.senderId,
      senderName: msg.senderName,
      text: msg.text,
      attachments: msg.attachments,
      createdAt: msg.createdAt.toISOString()
    };
  }
}

export class CodeShareMapper {
  static mapToDTO(codeShare: CodeShare) {
    return {
      code: codeShare.code,
      theme: codeShare.theme,
      language: codeShare.language,
      cursors: codeShare.cursors,
      selections: codeShare.selections
    };
  }
}
