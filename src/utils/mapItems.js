export default function mapItems(
  obj,
  { mapKey = ({ key }) => key, mapValue = ({ value }) => value }
) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const pair = { key, value };
      return [mapKey(pair), mapValue(pair)];
    })
  );
}
