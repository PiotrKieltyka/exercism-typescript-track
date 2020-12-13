class ComplexNumbers {
  abs = Math.sqrt(this.real ** 2 + this.imag ** 2);

  constructor(
    readonly real: number,
    readonly imag: number
  ) {}

  // addition
  add(numbers: ComplexNumbers): ComplexNumbers {
    return new ComplexNumbers(this.real + numbers.real, this.imag + numbers.imag);
  }

  // subtraction
  sub(numbers: ComplexNumbers): ComplexNumbers {
    return new ComplexNumbers(this.real - numbers.real, this.imag - numbers.imag);
  }

  // multiplication
  mul(numbers: ComplexNumbers): ComplexNumbers {
    return new ComplexNumbers(
      this.real * numbers.real - this.imag * numbers.imag,
      this.real * numbers.imag + this.imag * numbers.real
    )
  }

  // division
  div(numbers: ComplexNumbers): ComplexNumbers {
    return new ComplexNumbers(
      (this.real * numbers.real + this.imag * numbers.imag) / (numbers.real ** 2 + numbers.imag ** 2),
      (this.imag * numbers.real - this.real * numbers.imag) / (numbers.real ** 2 + numbers.imag ** 2)
    )
  }

  // conjugate
  get conj(): ComplexNumbers {
    return new ComplexNumbers(this.real, this.imag && -this.imag)
  }

  // exponent
  get exp(): ComplexNumbers {
    return new ComplexNumbers(Math.E ** this.real, 0)
      .mul(new ComplexNumbers(Math.cos(this.imag), Math.sin(this.imag)))
  }
}

export default ComplexNumbers;
