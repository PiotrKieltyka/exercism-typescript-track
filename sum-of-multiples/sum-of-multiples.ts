class SumOfMultiples {
  constructor(
    readonly num: number[]
  ) {}

  to(num: number): number {
    return Array.from(Array(num).keys())
      .filter(val => this.num.some(value => val % value === 0))
      .reduce((previous, next) => previous + next)
  }
}

export default (num: number[]): SumOfMultiples => new SumOfMultiples(num)
