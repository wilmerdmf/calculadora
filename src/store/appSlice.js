import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  precioUsdtCompra: 0,
  montoFinal: 0,
  tasaFinalVzla: 0,
  saldoAnterior: 0,
  saldoActual: 0,
  saldoTotal: 0,

  currencyForms: {
    VES: { precioCompra: 0, tasaVenta: 0 },
    COP: { precioCompra: 0, tasaVenta: 0 },
    PEN: { precioCompra: 0, tasaVenta: 0 },
    ARS: { precioCompra: 0, tasaVenta: 0 },
    ESP: { precioCompra: 0, tasaVenta: 0 },
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Establecer tasa del usdt
    setTasaUSDT(state, action) {
      state.precioUsdtCompra = action.payload;
    },

    // Establecer monto a enviar en divisa
    setMonto(state, action) {
      state.montoFinal = action.payload;
    },

    // Establecer tasa para el componente TieredRates
    setTasaFinalVzla(state, action) {
      state.tasaFinalVzla = action.payload;
    },

    // Establecer saldo anterior para diferencia
    setSaldoAnterior(state, action) {
      state.saldoAnterior = action.payload;
    },

    // Establecer saldo actual para diferencia
    setSaldoActual(state, action) {
      state.saldoActual = action.payload;
    },

    // Establecer saldo total pago movil
    setSaldoTotal(state, action) {
      state.saldoTotal = action.payload;
    },

    // Manejar formulario
    setCurrencyForm(state, action) {
      const { currency, field, value } = action.payload;

      if (!state.currencyForms) {
        state.currencyForms = {};
      }

      if (!state.currencyForms[currency]) {
        state.currencyForms[currency] = { precioCompra: 0, tasaVenta: 0 };
      }

      state.currencyForms[currency][field] = value;
    },

    // Resetear estado
    resetState() {
      return initialState;
    },
  },
});

export const {
  setTasaUSDT,
  setMonto,
  setTasaFinalVzla,
  setSaldoAnterior,
  setSaldoActual,
  setSaldoTotal,
  setCurrencyForm,
  resetState,
} = appSlice.actions;

export default appSlice.reducer;
