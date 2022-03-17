"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRepository = void 0;
class MeetingRepository {
    constructor() {
        this._meetingsMap = new Map();
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._meetingsMap.has(id)) {
                throw new Error("Meeting not found");
            }
            return this._meetingsMap.get(id);
        });
    }
    save(meeting) {
        return __awaiter(this, void 0, void 0, function* () {
            this._meetingsMap.set(meeting.id, meeting);
        });
    }
}
exports.MeetingRepository = MeetingRepository;
