"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
class Chat {
    constructor() {
        this._messages = [];
    }
    get messages() {
        return this._messages;
    }
    sendMessage(message) {
        this._messages.push(message);
    }
}
exports.Chat = Chat;
