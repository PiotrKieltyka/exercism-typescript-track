class Beer {

  static verse(beers: number): string {
    if (beers === 0) return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
    else if (beers === 1) return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
    else return `${this.bottles(beers)} of beer on the wall, ${this.bottles(beers)} of beer.
Take one down and pass it around, ${this.bottles(beers - 1)} of beer on the wall.
`
  }

  static sing(from = 99, to = 0): string {
    let song = ``
    for (let i = from; i >= to; i--) {
      song += this.verse(i)
      if (i !== to) song += '\n'
    }
    return song
  }

  static bottles(num: number): string {
    return `${num > 1 ? num+' bottles' : num+' bottle'}`
  }
}
export default Beer
