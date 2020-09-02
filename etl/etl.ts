type OldSystem = { [key: string]: string[] }
type NewSystem = { [key: string]: number }

function transpose(oldSys: OldSystem, score: string) {
  return oldSys[score].reduce((transposedScore, letter) => {
    transposedScore[letter.toLowerCase()] = Number(score)
    return transposedScore
  }, {} as NewSystem);
}

function transform(oldSys: OldSystem): NewSystem {
  let newSys: NewSystem = {}
  Object.keys(oldSys).forEach(score => {
    newSys = { ...newSys, ...transpose(oldSys, score) }
  })
  return newSys
}

export default transform
