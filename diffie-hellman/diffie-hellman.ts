class DiffieHellman {
  readonly _p: number
  readonly _g: number
  constructor(primeP: number, primeG: number) {
    if (primeP < 1 || primeG < 1 || primeP > 9999 || primeG > 9999) throw new Error('Numbers are out of range.')
    if (!this.isPrime(primeP) || !this.isPrime(primeG)) throw new Error('Only prime numbers allowed.')
    this._p = primeP
    this._g = primeG
  }

  getPublicKeyFromPrivateKey(key: number) {
    if (key <= 1 || key >= this._p) {
      throw new Error('Key is out of range.')
    }
    return this._g ** key % this._p
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return publicKey ** privateKey % this._p
  }

  private isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return num > 1
  }
}

export default DiffieHellman
