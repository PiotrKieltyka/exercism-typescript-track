type Operation = 'encode' | 'decode'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

class SimpleCipher {

  private key: string

  constructor(key?: string) {
    this.key = key || this.generateKey()
  }

  encode(input: string): string {
    return Array.from(input).map(
      (letter: string, index: number) =>
        this.shift(letter, this.key.charAt(index % this.key.length), 'encode')
    ).join('')
  }

  decode(input: string): string {
    return Array.from(input).map(
      (letter: string, index: number) =>
        this.shift(letter, this.key.charAt(index % this.key.length), 'decode')
    ).join('')
  }

  private generateKey(): string {
    let key = ''
    const size = Math.floor(Math.random() * 1000 + 100)
    for (let i = 0; i < size; i++) {
      key += alphabet.charAt(Math.random() * 26)
    }
    return key
  }

  private shift(plainText: string, cypher: string, type: Operation): string {
    const plainIndex = alphabet.indexOf(plainText)
    const cypherIndex = alphabet.indexOf(cypher)
    return alphabet.charAt(
      (plainIndex + (type === 'encode' ? cypherIndex :
          -1 * cypherIndex + alphabet.length)
      ) % alphabet.length
    )
  }
}

export default SimpleCipher
