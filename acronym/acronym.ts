export default class Acronym {
  public static parse(phrase: string): string {
    return (phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || [])
      .reduce( (acc, char) => acc += char[0].toUpperCase(), '')
  }
}
