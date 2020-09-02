class MatchingBrackets {
  private str = ''
  private bracketsPairs: any = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  constructor(str: string) {
    this.str = str
  }

  isPaired(): boolean {
    const stack: string[] = []
    return this.str.split('').every(char => {
      if (this.isOpening(char)) stack.push(char)
      else if (this.isClosing(char)) {
        const bracket = stack.pop()
        if (!bracket || bracket !== this.bracketsPairs[char]) return false
      }
      return true
    }) && stack.length === 0
  }

  private isClosing(char: string): boolean {
    return char === '}' || char === ']' || char === ')'
  }
  private isOpening(char: string): boolean {
    return char === '{' || char === '[' || char === '('
  }
}

export default MatchingBrackets
