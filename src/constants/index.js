export * from "./rates";
export * from "./commission";
export * from "./currencies";

export const APP_CONFIG = {
  basename: "/calculadora",
  storagePrefix: "calculadora_",
  version: "1.0.0",
};

export const STORAGE_KEYS = {
  TASA_VZLA: "tasaFinalVzlaData",
  REDUX_PERSIST: "persist:root",
  getFormKey: (currency) => `${currency.toLowerCase()}FormData`,
};

export const DEFAULT_VALUES = {
  precioUsdtCompra: 0,
  montoFinal: 0,
  tasaFinalVzla: 0,
  saldoAnterior: 0,
  saldoActual: 0,
  saldoTotal: 0,
};

export const MESSAGES = {
  BALANCE_NEGATIVO: "Balance Negativo",
  ERROR_LOADING: "Error cargando datos",
  NO_DATA: "Sin datos disponibles",
};

export const NUMBER_FORMAT = {
  locale: "es-ES",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  currencyDisplay: "symbol",
};
