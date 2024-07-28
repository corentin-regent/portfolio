export default function capitalize(str) {
  return str.replace(/(^|\s)[a-z]/g, l => l.toUpperCase());
}
