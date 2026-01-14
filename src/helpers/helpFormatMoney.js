// Helper formatear los montos

export const helpFormatMoney = (value, { currency = "", sign = false } = {}) => {
  const num = Number(value);
  if (isNaN(num) || num === 0) return `0,00${currency ? ` ${currency}` : ""}`;

  const abs = Math.abs(num);
  let formatted;

  if (abs > 999.99) {
    const f = abs.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const [entero, decimal] = f.split(",");
    formatted = `${entero.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimal}`;
  } else {
    formatted = abs.toFixed(2).replace(".", ",");
  }

  const prefix = sign ? (num >= 0 ? "+" : "-") : "";
  return `${prefix}${formatted}${currency ? ` ${currency}` : ""}`;
};
