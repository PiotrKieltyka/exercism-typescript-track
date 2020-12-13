class Prime {
  nth(num: number): number {
    if (num <= 0) throw 'Prime is not possible'
    if (num === 1) return 2;
    if (num === 2) return 3;

    const primes = [2, 3];
    let candidate = 3;

    while (primes.length < num) {
      candidate += 2;
      for (const prime of primes) {
        if (candidate < prime ** 2) {
          primes.push(candidate); break;
        }
        if (candidate %  prime === 0) break;
      }
    }
    return candidate;
  }
}

export default Prime;
