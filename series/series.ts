class Series {
  readonly digits: number[] = []
  constructor(str: string) {
    this.digits = [...str].map(Number)
  }

  slices(size: number): number[][] {
    if (size > this.digits.length) throw new Error()

    return this.digits.reduce((acc, _, index) => {
      if (index + size <= this.digits.length) {
        acc.push(this.digits.slice(index, index + size))
      }
      return acc
    }, new Array<number[]>())
  }
}

export default Series
