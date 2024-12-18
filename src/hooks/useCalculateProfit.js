import { useState } from "react";

export const useCalculateProfit = (currentForm, tasaUSDT) => {
  // Estado tasa de compra dinámica
  const [tasaCompra, setTasaCompra] = useState(0);

  // Estado porcentaje de ganancia
  const [porcentaje, setPorcentaje] = useState("0%");

  // Calcular porcentaje de ganancia
  const calcProfit = () => {
    if (!currentForm.precioCompra || !currentForm.tasaVenta) return setPorcentaje("0%");

    if (currentForm.precioCompra == 0 || currentForm.tasaVenta == 0) return setPorcentaje("0%");

    const precioCompra = Number(currentForm.precioCompra),
      tasaVenta = Number(currentForm.tasaVenta),
      tasaUSDTActual = Number(tasaUSDT.precioUsdtCompra);

    setTasaCompra(precioCompra / tasaUSDTActual);

    const porcentajeCalc = (tasaVenta * 100) / (precioCompra / tasaUSDTActual) - 100,
      fixedPorcentaje = `${Math.abs(parseFloat(porcentajeCalc.toFixed(2)))}%`,
      porcentajeFinal = Math.sign(porcentajeCalc) === 1 ? "Balance Negativo" : fixedPorcentaje;

    setPorcentaje(porcentajeFinal);
  };

  return { tasaCompra, porcentaje, calcProfit };
};
