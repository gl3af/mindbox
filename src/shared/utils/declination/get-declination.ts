export function getDeclination(
  count: number,
  [singular, plural]: [string, string]
) {
  if (count === 1) return singular;

  return plural;
}
