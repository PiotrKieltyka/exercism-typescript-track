class Squares {
  readonly num: number
  squareOfSum = 0
  sumOfSquares = 0
  difference = 0
  constructor(num: number) {
    this.num = num
    for (let i = 1; i <= this.num; i++) {
      this.squareOfSum += i
      this.sumOfSquares += i ** 2
    }
    this.squareOfSum **= 2
    this.difference = this.squareOfSum - this.sumOfSquares
  }
}

export default Squares
