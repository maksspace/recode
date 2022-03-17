import { InterviewPlanStep } from "./step";

export class InterviewPlan {
  private _steps: InterviewPlanStep[] = [];

  get steps() {
    return this._steps;
  }

  addStep(step: InterviewPlanStep) {
    this._steps.push(step);
  }

  deleteStep(index: number) {
    if (index > -1) {
      this._steps.splice(index, 1);
    }
  }
}
