class Raindrops {
  convert(num: number): string {
    let factors = []
    let result = ''
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) factors.push(i)
    }
    if (factors.includes(3)) result += 'Pling'
    if (factors.includes(5)) result += 'Plang'
    if (factors.includes(7)) result += 'Plong'

    return result === '' ? num.toString() : result
  }
}

export default Raindrops
