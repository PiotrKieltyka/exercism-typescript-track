export default function calculatePrimeFactors(num: number): Array<number> {
  const result: Array<number> = [];
  let divider = 2;
  while (num >= 2) {
    if (num % divider === 0) {
      result.push(divider);
      num = num / divider;
    } else {
      divider++;
    }
  }
  return result;
}
