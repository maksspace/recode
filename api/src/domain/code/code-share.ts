import { UniqueID } from "../identity";
import { CursorPosition } from "./cursor";
import { SelectionPosition } from "./selection";
import { Participant } from "../participant";
import Timeout = NodeJS.Timeout;

export class CodeShare {
  private _code: string = "";
  private _theme: string = "vs-dark";
  private _language: string = "plaintext";
  private _typingId: string | null = null;
  private _timeout: Timeout | null = null;
  private _cursors = new Map<UniqueID, CursorPosition>();
  private _selections = new Map<UniqueID, SelectionPosition>();

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

  editCode(code: string) {
    this._code = code;
  }

  lockTypingBy(participant: Participant, onUnlock: () => void) {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._typingId = participant.id;
    this._timeout = setTimeout(() => {
      this._typingId = null;
      onUnlock();
    }, 2500);
  }

  editCursor(participantId: UniqueID, cursor: CursorPosition) {
    this._cursors.set(participantId, cursor);
  }

  removeCursor(participantId: UniqueID) {
    if (this._cursors.has(participantId)) {
      this._cursors.delete(participantId);
    }
  }

  editSelection(participantId: UniqueID, selection: SelectionPosition) {
    this._selections.set(participantId, selection);
  }

  editLanguage(lang: string) {
    this._language = lang;
  }
}
