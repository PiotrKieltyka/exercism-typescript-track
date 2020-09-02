class Pangram {
    readonly str: string = ''
    private regex = /([a-z])(?!.*\1)/g

    constructor(str: string) {
        this.str = str.toLowerCase()
    }

    isPangram(): boolean {
      return (this.str.match(this.regex) || []).length === 26
    }
}

export default Pangram
