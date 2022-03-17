import { Meeting, UniqueID } from "../domain";
import { Repository } from "./repository.interface";

export class MeetingRepository implements IMeetingRepository {
  private _meetingsMap = new Map<UniqueID, Meeting>();

  async findById(id: UniqueID) {
    if (!this._meetingsMap.has(id)) {
      throw new Error("Meeting not found");
    }
    return this._meetingsMap.get(id);
  }

  async save(meeting: Meeting) {
    this._meetingsMap.set(meeting.id, meeting);
  }
}

export interface IMeetingRepository extends Repository<Meeting> {
}
