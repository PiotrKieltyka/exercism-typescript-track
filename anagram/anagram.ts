class Anagram {
  readonly str: string
  private result: Array<string> = []

  constructor(str: string) {
    this.str = str
  }

  matches(...arr: Array<string>): Array<string> {
    arr.forEach(word => {
      if (this.str.length === word.length) {
        if (this.str.toLowerCase() === word.toLowerCase()) return;
        if (this.str.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('')) {
          this.result.push(word)
        }
      }
    })
    return this.result
  }
}

export default Anagram
