import mapItems from './mapItems.js';

export default function mapKeys(obj, fn) {
  return mapItems(obj, { mapKey: fn });
}
