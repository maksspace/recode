import randomColor from "randomcolor";
import { UniqueID } from "./identity";
import { UniqueColor } from "./color";

export class Participant {

  readonly id: UniqueID;
  private _login: string;
  private _color: string;
  private _audio: boolean = false;
  private _video: boolean = false;
  private _avatar: Avatar = "";

  constructor(id: UniqueID, login: string) {
    this.id = id;
    this._login = login;
    this._color = randomColor();
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

  muteAudio(mute: boolean) {
    this._audio = mute;
  }

  muteVideo(mute: boolean) {
    this._video = mute;
  }

  changeAvatar(avatar: Avatar) {
    this._avatar = avatar;
  }

  changeColor(color: UniqueColor) {
    this._color = color;
  }
}

type Avatar = string;
