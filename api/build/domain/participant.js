"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const randomcolor_1 = __importDefault(require("randomcolor"));
class Participant {
    constructor(id, login) {
        this._audio = false;
        this._video = false;
        this._avatar = "";
        this.id = id;
        this._login = login;
        this._color = randomcolor_1.default();
    }
    get login() {
        return this._login;
    }
    get color() {
        return this._color;
    }
    get audio() {
        return this._audio;
    }
    get video() {
        return this._video;
    }
    get avatar() {
        return this._avatar;
    }
    muteAudio(mute) {
        this._audio = mute;
    }
    muteVideo(mute) {
        this._video = mute;
    }
    changeAvatar(avatar) {
        this._avatar = avatar;
    }
    changeColor(color) {
        this._color = color;
    }
}
exports.Participant = Participant;
