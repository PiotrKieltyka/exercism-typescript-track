class Words {

  count(str: string): Object {

    let result = new Map()

    this.prepareWords(str).map(word => {
      if (result.has(word)) result.set(word, result.get(word) + 1)
      else result.set(word, 1)
    })
    return result
  }

  prepareWords(words: string) {
    return words.trim().replace(/\s+/g, ' ').toLowerCase().split(' ')
  }
}

export default Words
