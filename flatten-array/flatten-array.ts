class FlattenArray {
  static flatten<T>(smth: Array<T>): Array<T> {
    return smth.reduce((acc: Array<T>, value: T): Array<T> => {
      return value === undefined
        ? acc
        : Array.isArray(value)
          ? acc.concat(FlattenArray.flatten(value))
          : acc.concat(value)
    }, [])
  }
}

export default FlattenArray
