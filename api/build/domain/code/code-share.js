"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeShare = void 0;
class CodeShare {
    constructor() {
        this._code = "";
        this._theme = "vs-dark";
        this._language = "plaintext";
        this._typingId = null;
        this._timeout = null;
        this._cursors = new Map();
        this._selections = new Map();
    }
    get code() {
        return this._code;
    }
    get theme() {
        return this._theme;
    }
    get language() {
        return this._language;
    }
    get cursors() {
        return this._cursors;
    }
    get selections() {
        return this._selections;
    }
    get typingId() {
        return this._typingId;
    }
    editCode(code) {
        this._code = code;
    }
    lockTypingBy(participant, onUnlock) {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this._typingId = participant.id;
        this._timeout = setTimeout(() => {
            this._typingId = null;
            onUnlock();
        }, 2500);
    }
    editCursor(participantId, cursor) {
        this._cursors.set(participantId, cursor);
    }
    removeCursor(participantId) {
        if (this._cursors.has(participantId)) {
            this._cursors.delete(participantId);
        }
    }
    editSelection(participantId, selection) {
        this._selections.set(participantId, selection);
    }
    editLanguage(lang) {
        this._language = lang;
    }
}
exports.CodeShare = CodeShare;
