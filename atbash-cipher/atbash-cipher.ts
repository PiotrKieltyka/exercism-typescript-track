// alphabet = 'abcdefghijklmnopqrstuvwxyz'
// cipher = 'zyxwvutsrqponmlkjihgfedcba'

class AtbashCipher {

  decode(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^A-z\d]/g, '')
      .replace(/[A-z]/g, letter => {
        const charCode = letter.charCodeAt(0)
        const startIndex = charCode > 90 ? 97 : 65
        return String.fromCharCode(startIndex + 25 - (charCode - startIndex))
      })
  }

  encode(input: string): string {
    return this.decode(input)
      .match(/.{1,5}/g)!
      .join(' ')
  }
}

export default AtbashCipher
