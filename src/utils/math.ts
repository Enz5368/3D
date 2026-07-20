export const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

export const smoothstep = (edge0: number, edge1: number, value: number) => {
  const x = clamp01((value - edge0) / (edge1 - edge0));
  return x * x * (3 - 2 * x);
};
