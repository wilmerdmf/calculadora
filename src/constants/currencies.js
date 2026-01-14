// Lista de monedas soportadas
export const SUPPORTED_CURRENCIES = {
  VES: {
    code: "VES",
    symbol: "Bs",
    name: "Bolívar",
    country: "Venezuela",
    hasMultiRate: true,
  },
  COP: {
    code: "COP",
    symbol: "$",
    name: "Peso Colombiano",
    country: "Colombia",
    hasMultiRate: false,
  },
  PEN: {
    code: "PEN",
    symbol: "S/",
    name: "Sol",
    country: "Perú",
    hasMultiRate: false,
  },
  ARS: {
    code: "ARS",
    symbol: "$",
    name: "Peso Argentino",
    country: "Argentina",
    hasMultiRate: false,
  },
  ESP: {
    code: "ESP",
    symbol: "€",
    name: "Euro",
    country: "España",
    hasMultiRate: false,
  },
};

// Rutas de navegación
export const NAV_ROUTES = [
  { key: "VES", path: "/VES", currency: SUPPORTED_CURRENCIES.VES },
  { key: "COP", path: "/COP", currency: SUPPORTED_CURRENCIES.COP },
  { key: "PEN", path: "/PEN", currency: SUPPORTED_CURRENCIES.PEN },
  { key: "ARS", path: "/ARS", currency: SUPPORTED_CURRENCIES.ARS },
  { key: "ESP", path: "/ESP", currency: SUPPORTED_CURRENCIES.ESP },
  { key: "HOME", path: "/", currency: null },
];

export const isSupportedCurrency = (currency) => {
  return currency in SUPPORTED_CURRENCIES;
};

export const getCurrencySymbol = (currencyCode) => {
  return SUPPORTED_CURRENCIES[currencyCode]?.symbol || "";
};
