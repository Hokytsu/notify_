export const usedIds = new Set<number>();
export function genId(): number {
  let id: number;
  const maxAttempts = 100;
  let attempts = 0;
  do {
    id = Math.floor(1000 + Math.random() * 9000);
    attempts++;
    if (attempts > maxAttempts / 2) {
      id = Math.floor(100000 + Math.random() * 900000);
    }
  } while (usedIds.has(id) && attempts < maxAttempts);
  usedIds.add(id);
  return id;
}
