import mapItems from './mapItems.js';

export default function mapValues(obj, fn) {
  return mapItems(obj, { mapValue: fn });
}
