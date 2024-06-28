export default function classes(...args) {
  return args
    .filter(Boolean)
    .flatMap(arg => arg.split(' '))
    .filter(Boolean)
    .join(' ');
}
