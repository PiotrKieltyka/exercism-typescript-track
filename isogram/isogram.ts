class Isogram {
  static isIsogram(str: string): boolean {
    let arr = str.toLowerCase().split('').filter(ch => ch >= 'a' && ch <= 'z')
    return arr.length === new Set(arr).size
  }
}

export default Isogram
