class Sieve {
  static primes(limit: number): Array<number> {
    const primes: Array<number> = []
    const numbers: Set<number> = new Set<number>()

    for (let i = 2; i <= limit; i++) {
      if (!numbers.has(i)) {
        primes.push(i)
        for (let j = i * 2; j <= limit; j += i) numbers.add(j)
      }
    }
    return primes
  }
}

export default Sieve
