class PhoneNumber {
  readonly num: string
  result: string = ''

  constructor(str: string) {
    this.num = str
  }

  number() {
    if (this.num.match(/[a-z]/g)) return undefined
    this.result = this.num.replace(/\D/g, '')
    if (
      this.result.length <= 9 ||
      this.result.length > 11 ||
      (this.result.length === 11 && this.result[0] != '1')
    ) return undefined
    if (this.result.length === 11 && this.result[0] === '1') return this.result.slice(1, 11)
    return this.result
  }
}

export default PhoneNumber
