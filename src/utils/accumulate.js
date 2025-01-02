export default function accumulate(iterable, fn) {
  const iterator = iterable[Symbol.iterator]();
  let { value: currentValue } = iterator.next();
  const result = [currentValue];
  for (const value of iterator) {
    currentValue = fn(currentValue, value);
    result.push(currentValue);
  }
  return result;
}
