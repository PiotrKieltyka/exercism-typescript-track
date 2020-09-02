class RunLengthEncoding {
  static encode(str: string): string {
    return str.replace(/([a-z]|[A-Z]| )\1+/g, (matched, char) => matched.length + char)
  }

  static decode(str: string): string {
    return str.replace(/(\d+)(\w| )/g, (_, rep, char) => char.repeat(rep))
  }
}

export default RunLengthEncoding
