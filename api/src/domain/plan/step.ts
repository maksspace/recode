export class InterviewPlanStep {

  private _title: string;
  private _description: string;
  private _duration: string;
  private _score: number = 0;

  constructor(
    title: string,
    description: string,
    duration: string
  ) {
    this._title = title;
    this._duration = duration;
    this._description = description;
  }

  get title(): string {
    return this._title;
  }

  get description(): string | null {
    return this._description;
  }

  get score(): number {
    return this._score;
  }

  get duration(): string {
    return this._duration;
  }

  editScore(score: number) {
    this._score = score;
  }
}
