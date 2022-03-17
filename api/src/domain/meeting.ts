import { Chat } from "./chat/chat";
import { CodeShare } from "./code/code-share";
import { Faces } from "./faces/face";
import { InterviewPlan } from "./plan";
import { UniqueID } from "./identity";
import { Participant } from "./participant";

export class Meeting {
  private _chat = new Chat();
  private _codeShare = new CodeShare();
  private _plan = new InterviewPlan();
  private _participants = new Map<UniqueID, Participant>();
  private _faces = new Faces();
  private _locked = false;

  constructor(readonly id: UniqueID, readonly hostId: UniqueID) {
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

  join(id: UniqueID, login: string) {
    const participant = new Participant(id, login);
    this._participants.set(id, participant);
    return participant;
  }

  leave(id: UniqueID) {
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

  isHost(participant: Participant) {
    return this.hostId === participant.id;
  }
}
