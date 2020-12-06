export default class RotationalCipher {
  static rotate(str: string, rot: number): string {
    return str
      .replace(/[a-zA-Z]/g, letter => {
        const charCode = letter.charCodeAt(0)
        let rotatedCode = charCode + rot
        if (
          (charCode < 91 && rotatedCode > 90)
          ||
          (charCode < 123 && rotatedCode > 122)
        ) rotatedCode -= 26
        return String.fromCharCode(rotatedCode)
      })
  }
}
