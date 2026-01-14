// Helper calcular tasa de compra

export const helpCalcRate = (precio, tasaUsdt) => {
  const p = Number(precio);
  const t = Number(tasaUsdt);

  if (!p || !t) return 0;
  return p / t;
};
