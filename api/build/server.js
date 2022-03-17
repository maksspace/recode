"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const domain_1 = require("./domain");
const middlewares_1 = require("./middlewares");
const socket_event_1 = require("./socket-event");
const s3_file_uploader_1 = require("./s3-file-uploader");
const mappers_1 = require("./mappers");
const app = express_1.default();
app.use(middlewares_1.allowCrossDomain);
s3_file_uploader_1.s3FileUploader(app);
exports.httpServer = http_1.default.createServer(app);
exports.io = socket_io_1.default(exports.httpServer);
const meetings = new Map();
function getOrCreateMeeting(meetingId, hostId, config = { facesEnabled: true }) {
    if (meetings.has(meetingId)) {
        return meetings.get(meetingId);
    }
    const meeting = new domain_1.Meeting(meetingId, hostId);
    meetings.set(meetingId, meeting);
    if (!(config === null || config === void 0 ? void 0 : config.facesEnabled)) {
        meeting.faces.disable();
    }
    return meeting;
}
exports.io.on("connection", (socket) => {
    socket.on(socket_event_1.SocketEvent.CreateMeeting, ({ meetingId, id }) => {
        const meeting = meetings.get(meetingId);
        if (!meeting) {
            getOrCreateMeeting(meetingId, id);
        }
    });
    socket.on(socket_event_1.SocketEvent.JoinMeeting, ({ meetingId, id, login, color, avatar, config }) => {
        const meeting = getOrCreateMeeting(meetingId, id, config);
        const participant = meeting.join(id, login);
        if (avatar) {
            participant.changeAvatar(avatar);
        }
        if (color) {
            participant.changeColor(color);
        }
        socket.join(id);
        socket.join(meetingId);
        socket
            .to(meeting.id)
            .emit(socket_event_1.SocketEvent.ParticipantJoined, mappers_1.ParticipantMapper.mapToDTO(participant));
        // fix me: authid
        socket.emit(socket_event_1.SocketEvent.SyncMeetingState, mappers_1.MeetingMapper.mapToDTO(meeting, id));
        socket.on(socket_event_1.SocketEvent.SetMeetingLocked, ({ locked }) => {
            if (meeting.isHost(participant)) {
                if (locked) {
                    meeting.lock();
                }
                else {
                    meeting.unlock();
                }
                socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetMeetingLocked, { locked });
            }
        });
        socket.on(socket_event_1.SocketEvent.ChatMessage, ({ text, attachments }) => {
            const message = new domain_1.Message(participant.id, participant.login, text);
            if (attachments === null || attachments === void 0 ? void 0 : attachments.length) {
                message.setAttachments(attachments);
            }
            meeting.chat.sendMessage(message);
            socket
                .to(meeting.id)
                .emit(socket_event_1.SocketEvent.ChatMessage, mappers_1.ChatMessageMapper.mapToDTO(message));
        });
        socket.on(socket_event_1.SocketEvent.SetCodeShareTabContent, ({ code, changes = [] }) => {
            const isCodeLocked = !!meeting.codeShare.typingId;
            const isLockedByMe = isCodeLocked && meeting.codeShare.typingId === participant.id;
            if (meeting.locked) {
                return;
            }
            if (isCodeLocked && !isLockedByMe) {
                return;
            }
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeTypingLocked, {
                id: participant.id
            });
            meeting.codeShare.lockTypingBy(participant, () => {
                socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeTypingLocked, {
                    id: null
                });
            });
            meeting.codeShare.editCode(code);
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeShareTabContent, {
                code: meeting.codeShare.code,
                changes
            });
        });
        socket.on(socket_event_1.SocketEvent.SetCodeShareCursor, (position) => {
            meeting.codeShare.editCursor(participant.id, position);
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeShareCursor, {
                participantId: participant.id,
                position
            });
        });
        socket.on(socket_event_1.SocketEvent.SetCodeShareSelection, (selection) => {
            meeting.codeShare.editSelection(participant.id, selection);
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeShareSelection, {
                participantId: participant.id,
                selection
            });
        });
        socket.on(socket_event_1.SocketEvent.SetCodeShareLanguage, ({ language }) => {
            meeting.codeShare.editLanguage(language);
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.SetCodeShareLanguage, {
                language
            });
        });
        // Leave meeting
        socket.on(socket_event_1.SocketEvent.Disconnecting, () => {
            meeting.leave(participant.id);
            socket.to(meeting.id).emit(socket_event_1.SocketEvent.LeaveMeeting, {
                participantId: participant.id
            });
        });
    });
});
exports.httpServer.listen(8080, () => {
    console.log("listening on *:8080");
});
