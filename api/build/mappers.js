"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeShareMapper = exports.ChatMessageMapper = exports.ParticipantMapper = exports.MeetingMapper = void 0;
class MeetingMapper {
    static mapToDTO(meeting, userId) {
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
exports.MeetingMapper = MeetingMapper;
class ParticipantMapper {
    static mapToDTO(participant) {
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
exports.ParticipantMapper = ParticipantMapper;
class ChatMessageMapper {
    static mapToDTO(msg) {
        return {
            senderId: msg.senderId,
            senderName: msg.senderName,
            text: msg.text,
            attachments: msg.attachments,
            createdAt: msg.createdAt.toISOString()
        };
    }
}
exports.ChatMessageMapper = ChatMessageMapper;
class CodeShareMapper {
    static mapToDTO(codeShare) {
        return {
            code: codeShare.code,
            theme: codeShare.theme,
            language: codeShare.language,
            cursors: codeShare.cursors,
            selections: codeShare.selections
        };
    }
}
exports.CodeShareMapper = CodeShareMapper;
