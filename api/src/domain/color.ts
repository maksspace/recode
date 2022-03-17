import randomColor from "randomcolor";

export class Color {
  createColor(): UniqueColor {
    return randomColor();
  }
}

export type UniqueColor = string;
