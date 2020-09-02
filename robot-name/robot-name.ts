class RobotName {
  private robotName!: string
  private usedNames: string[] = []

  constructor() {
    this.resetName()
  }

  public get name(): string {
    return this.robotName
  }

  public resetName(): void {
    let candidate = ''
    do {
      candidate = this.generateName()
    } while (this.usedNames.includes((candidate)))

    this.robotName = candidate
    this.usedNames = [...this.usedNames, candidate]
  }

  private generateName(): string {
    return `${String.fromCharCode(this.randomGen(65,90))}${String.fromCharCode(this.randomGen(65,90))}${this.randomGen(0,9)}${this.randomGen(0,9)}${this.randomGen(0,9)}`
  }

  private randomGen(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

export default RobotName
