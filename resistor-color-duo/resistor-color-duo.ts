import {throws} from "assert";

export class ResistorColor {
  readonly colors: string[] = []
  private resistanceColors: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

  constructor(colors: string[]) {
    if (colors.length < 2)
      throw (`At least two colors need to be present`)
    else this.colors = colors
  }

  value = (): number =>
      Number(`${this.resistanceColors.indexOf(this.colors[0])}` + `${this.resistanceColors.indexOf(this.colors[1])}`)
}
