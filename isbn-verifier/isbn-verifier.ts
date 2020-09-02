export default class IsbnVerifier {

  private ISBNregexp = /\d-*?\d{3}-*?\d{5}-*[\dX]/

  constructor(private ISBN: string) {}

  isValid(): boolean {
    if (this.ISBN.length > 13) return false
    else return this.ISBNregexp.test(this.ISBN) && [...this.ISBN]
      .filter(char => char !== '-')
      .map(char => char === 'X' ? 10 : +char)
      .reduce((sum, value, index) => sum + value * (10 - index), 0) % 11 === 0
  }
}
