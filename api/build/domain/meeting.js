"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meeting = void 0;
const chat_1 = require("./chat/chat");
const code_share_1 = require("./code/code-share");
const face_1 = require("./faces/face");
const plan_1 = require("./plan");
const participant_1 = require("./participant");
class Meeting {
    constructor(id, hostId) {
        this.id = id;
        this.hostId = hostId;
        this._chat = new chat_1.Chat();
        this._codeShare = new code_share_1.CodeShare();
        this._plan = new plan_1.InterviewPlan();
        this._participants = new Map();
        this._faces = new face_1.Faces();
        this._locked = false;
    }
    get chat() {
        return this._chat;
    }
    get codeShare() {
        return this._codeShare;
    }
    get participants() {
        return Array.from(this._participants).map(i => i[1]);
    }
    get plan() {
        return this._plan;
    }
    get faces() {
        return this._faces;
    }
    get locked() {
        return this._locked;
    }
    join(id, login) {
        const participant = new participant_1.Participant(id, login);
        this._participants.set(id, participant);
        return participant;
    }
    leave(id) {
        if (this._participants.has(id)) {
            this._codeShare.removeCursor(id);
            this._participants.delete(id);
        }
    }
    lock() {
        this._locked = true;
    }
    unlock() {
        this._locked = false;
    }
    isHost(participant) {
        return this.hostId === participant.id;
    }
}
exports.Meeting = Meeting;
