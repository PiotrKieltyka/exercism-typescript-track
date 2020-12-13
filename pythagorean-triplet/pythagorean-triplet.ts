class PythagoreanTriplet {

  constructor(
    readonly a: number,
    readonly b: number,
    readonly c: number
  ) {}

  sum = () => this.a + this.b + this.c;

  product = () => this.a * this.b * this.c;

  isPythagorean = () => this.a ** 2 + this.b ** 2 === this.c ** 2;

  static where(max: number, min?: number, sum?: number): PythagoreanTriplet[] {
    let result: PythagoreanTriplet[] = [];

    for (let i = min || 1; i < max; i++) {
      for (let j = i + 1; j < max; j++) {
        for (let k = j + 1; k <= max; k++) {
          let triplet = new PythagoreanTriplet(i, j, k);
          if (triplet.isPythagorean()) result.push(triplet)
        }
      }
    }
    return sum === undefined ? result : result.filter(t => t.sum() === sum);
  }
}

export default PythagoreanTriplet;
