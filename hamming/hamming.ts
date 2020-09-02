class Hamming {
  compute(dnastr1: string, dnastr2: string): number {
    if (dnastr1.length !== dnastr2.length) throw new Error('DNA strands must be of equal length.')
    let hammingDistance = 0
    for (let i = 0; i < dnastr1.length; i++) {
      if (dnastr1[i] !== dnastr2[i]) hammingDistance++
    }
    return hammingDistance
  }
}

export default Hamming
