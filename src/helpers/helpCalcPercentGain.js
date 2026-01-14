// Helper calcular porcentaje de ganancia

export const helpCalcPercentGain = (precioCompra, tasaVenta, tasaUsdt) => {
  const compra = Number(precioCompra);
  const venta = Number(tasaVenta);
  const usdt = Number(tasaUsdt);

  if (!compra || !venta || !usdt) return "0%";

  const tasaCompraCalc = compra / usdt;
  const porcentaje = (venta * 100) / tasaCompraCalc - 100;
  const fixed = Math.abs(porcentaje.toFixed(2)) + "%";

  return porcentaje > 0 ? "Balance Negativo" : fixed;
};
