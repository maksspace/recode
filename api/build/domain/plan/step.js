"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewPlanStep = void 0;
class InterviewPlanStep {
    constructor(title, description, duration) {
        this._score = 0;
        this._title = title;
        this._duration = duration;
        this._description = description;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get score() {
        return this._score;
    }
    get duration() {
        return this._duration;
    }
    editScore(score) {
        this._score = score;
    }
}
exports.InterviewPlanStep = InterviewPlanStep;
