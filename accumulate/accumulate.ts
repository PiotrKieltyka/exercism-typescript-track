export default function accumulate<T, K>(arr: Array<T>, acc: (x: T) => K): K[] {
  const result = new Array<K>()
  for (let item of arr) result.push(acc(item))
  return result
}
