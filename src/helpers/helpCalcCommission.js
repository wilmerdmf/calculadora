// Helper calcular comisión pago movil

export const helpCalcCommission = (amount, rate) => {
  return (Number(amount) * Number(rate)) / 100;
};
