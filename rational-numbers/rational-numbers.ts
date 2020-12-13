interface IRational {
  numerator: number;
  denominator: number;
  addition(rational: IRational): IRational;
  subtraction(rational: IRational): IRational;
  multiplication(rational: IRational): IRational;
  division(rational: IRational): IRational;
  abs(): IRational; // absolute value
  exponentRealNumber(num: number): number; // exponentiation of a real number
  exponentRationalNumber(num: number): IRational; // exponentiation of a rational number
  reduce(): IRational;
  // private gcd(numerator: number, denominator: number): number;
}

class RationalNumbers implements IRational {
  numerator = 1;
  denominator = 1;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator / this.gcd(numerator, denominator);
    this.denominator = denominator / this.gcd(numerator, denominator);
    if (this.numerator === -0) this.numerator = 0;
  }

  addition(rational: IRational): IRational {
    const numerator = (this.numerator * rational.denominator) + (this.denominator * rational.numerator);
    const denominator = this.denominator * rational.denominator;
    return new RationalNumbers(numerator, denominator);
  }

  subtraction(rational: IRational): IRational {
    const numerator = (this.numerator * rational.denominator) - (this.denominator * rational.numerator);
    const denominator = this.denominator * rational.denominator;
    return new RationalNumbers(numerator, denominator);
  }

  division(rational: IRational): IRational {
    const numerator = this.numerator * rational.denominator;
    const denominator = this.denominator * rational.numerator;
    return new RationalNumbers(numerator, denominator);
  }

  multiplication(rational: IRational): IRational {
    const numerator = this.numerator * rational.numerator;
    const denominator = this.denominator * rational.denominator;
    return new RationalNumbers(numerator, denominator);
  }

  reduce(): IRational {
    return new RationalNumbers(this.numerator, this.denominator);
  }

  exponentRealNumber(num: number): number {
    return 2 ** (Math.log2(num ** this.numerator) / this.denominator)
  }

  exponentRationalNumber(num: number): IRational {
    return new RationalNumbers(this.numerator ** num, this.denominator ** num)
  }

  abs(): IRational {
    return new RationalNumbers(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  private gcd(numerator: number, denominator: number): number {
    if (denominator === 0) return numerator;
    return this.gcd(denominator, numerator % denominator);
  }

}

export default RationalNumbers;
