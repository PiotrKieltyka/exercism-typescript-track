const solve = (goalVol: number, [cup1, cup2]: number[]): [number, number][] =>
  (function solveRecursive(path: [number, number][]): [number, number][] {
    const [vol1, vol2] = path[path.length - 1]

    if ([vol1, vol2].includes(goalVol)) {
      return path
    }

    if (vol1 === 0) {
      return solveRecursive([...path, [cup1, vol2]])
    }

    if (vol2 === cup2) {
      return solveRecursive([...path, [vol1, 0]])
    }

    const moveVol = Math.min(vol1, cup2 - vol2)

    return solveRecursive([...path, [vol1 - moveVol, vol2 + moveVol]])
  })([[0,0]]) // iife

export class TwoBucket {
  goalBucket?: string
  otherBucket?: number

  constructor(
    readonly cup1: number,
    readonly cup2: number,
    readonly goalVolume: number,
    readonly start: Bucket
  ) {}

  moves(): number {
    const cups = this.start ? [this.cup2, this.cup1] : [this.cup1, this.cup2]
    const path = solve(this.goalVolume, cups)
    const volumes = path[path.length - 1]
    const goalIndex = (this.start ? volumes.reverse() : volumes).indexOf(this.goalVolume)

    this.goalBucket = ['one', 'two'][goalIndex]
    this.otherBucket = volumes[1 - goalIndex]

    return path.length - 1
  }
}
export enum Bucket { One, Two }
