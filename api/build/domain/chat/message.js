"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(senderId, senderName, text = '') {
        this.senderId = senderId;
        this.senderName = senderName;
        this.text = text;
        this._attachments = [];
        this.createdAt = new Date();
    }
    get attachments() {
        return this._attachments;
    }
    setAttachments(attachments) {
        this._attachments = attachments;
    }
}
exports.Message = Message;
