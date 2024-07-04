export default function withTrailingSlash(str) {
  return str.endsWith('/') ? str : str + '/';
}
