// Incremento de tasa especial del componente TieredRates
export const RATE_INCREMENTS = {
  tier1: 0, // 10.000
  tier2: 0.0002, // 50.000
  tier3: 0.0004, // 100.000
  tier4: 0.0007, // 500.000
};

// Clasificación de las tasas especiales
export const RATE_TIERS = [
  {
    amount: "10.000",
    key: "tasa1",
    increment: RATE_INCREMENTS.tier1,
    label: "Hasta 10.000",
  },
  {
    amount: "50.000",
    key: "tasa2",
    increment: RATE_INCREMENTS.tier2,
    label: "Hasta 50.000",
  },
  {
    amount: "100.000",
    key: "tasa3",
    increment: RATE_INCREMENTS.tier3,
    label: "Hasta 100.000",
  },
  {
    amount: "500.000",
    key: "tasa4",
    increment: RATE_INCREMENTS.tier4,
    label: "500.000 o más",
  },
];
