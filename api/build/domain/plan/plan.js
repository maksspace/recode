"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewPlan = void 0;
class InterviewPlan {
    constructor() {
        this._steps = [];
    }
    get steps() {
        return this._steps;
    }
    addStep(step) {
        this._steps.push(step);
    }
    deleteStep(index) {
        if (index > -1) {
            this._steps.splice(index, 1);
        }
    }
}
exports.InterviewPlan = InterviewPlan;
