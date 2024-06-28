const sentinel = Symbol('sentinel');

export default function accumulate(iterable, fn, initial = sentinel) {
  const iterator = iterable[Symbol.iterator]();
  if (initial === sentinel) {
    const { done, value } = iterator.next();
    if (done) {
      throw new Error('Iterable is empty and no initial value was provided');
    }
    initial = value;
  }

  const result = [initial];
  let currentValue = initial;
  for (const value of iterator) {
    currentValue = fn(currentValue, value);
    result.push(currentValue);
  }
  return result;
}
