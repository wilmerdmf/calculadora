// Helper calcular porcentaje de diferencia

export const helpCalcPercentDiff = (prev, next) => {
  const a = Number(prev);
  const b = Number(next);
  if (!a || !b) return 0;
  return ((b - a) / a) * 100;
};
