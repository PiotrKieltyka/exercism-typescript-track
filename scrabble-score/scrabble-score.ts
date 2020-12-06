const VALUES: [RegExp, number][]  = [
  [/[AEIOULNRST]/i, 1],
  [/[DG]/i, 2],
  [/[BCMP]/i, 3],
  [/[FHVWY]/i, 4],
  [/[K]/i, 5],
  [/[JX]/i, 8],
  [/[QZ]/i, 10],
]

export default function score(word: string | undefined): number {
  let result = 0
  for (let char of word || '') {
    for (let [letter, value] of VALUES) {
      if (letter.test(char)) result += value
    }
  }
  return result
}
