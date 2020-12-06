const orientation = ['east', 'south', 'west', 'north']
const moves: { [char: string]: string } = {
  R: 'turnRight',
  L: 'turnLeft',
  A: 'advance'
}

class Robot {
  constructor(
    private coordX = 0,
    private coordY = 0,
    public bearing = 'north'
  ) {}

  get coordinates() {
    return [this.coordX, this.coordY]
  }

  set coordinates(coords: number[]) {
    [this.coordX, this.coordY] = coords
  }

  orient(direction: string) {
    if (orientation.includes(direction)) {
      this.bearing = direction
    } else throw 'Invalid Robot Bearing'
  }

  at(x: number, y: number) {
    this.coordinates = [x, y]
  }

  advance() {
    switch (this.bearing) {
      case('east'): this.coordX += 1; break
      case('south'): this.coordY -= 1; break
      case('west'): this.coordX -= 1; break
      case('north'): this.coordY += 1; break
    }
  }

  evaluate(path: string) {
    this.instructions(path).forEach(cmd => {
      switch (cmd) {
        case('turnRight'): return this.turnRight.bind(this)()
        case('turnLeft'): return this.turnLeft.bind(this)()
        case('advance'): return this.advance.bind(this)()
      }
    })
  }

  turnRight(): void {
    this.turnRobot(1)
  }

  turnLeft(): void {
    this.turnRobot(-1)
  }

  turnRobot(move: number): void {
    const oldDirection = orientation.indexOf(this.bearing)
    const newDirection = (oldDirection + move + 4) % 4
    this.bearing = orientation[newDirection]
  }

  instructions(str: string): string[] {
    return str.split('').map(char => moves[char])
  }
}

export default Robot
