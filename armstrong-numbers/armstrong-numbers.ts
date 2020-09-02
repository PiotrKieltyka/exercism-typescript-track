class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    const arrWithNumbers = num.toString().split('')
    let result = 0
    arrWithNumbers.forEach(num => {
      result += Math.pow(Number(num), arrWithNumbers.length)
    })
    return result === num ? true : false
  }
}

export default ArmstrongNumbers
