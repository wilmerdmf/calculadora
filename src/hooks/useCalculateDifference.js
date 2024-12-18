import { useState } from "react";

export const useCalculateDifference = () => {
  // Estado diferencias
  const [diffValues, setDiffValues] = useState({
    saldoAnterior: 0,
    saldoActual: 0,
  });

  // Manejador del formulario diferencias Saldo Anterior - Actual
  const handleDiffForm = (e) => {
    const { value, name } = e.target;
    setDiffValues({
      ...diffValues,
      [name]: value,
    });
  };

  // Estado porcentaje de ganancia diaria
  const [gananciaDiaria, setGananciaDiaria] = useState("0");

  // Calcular porcentaje de ganancia diaria
  const calcDifference = () => {
    if (!diffValues.saldoAnterior || !diffValues.saldoActual) return setGananciaDiaria("0");

    const numberValue = (Number(diffValues.saldoAnterior) * 100) / Number(diffValues.saldoActual) - 100;

    if (Math.sign(numberValue) === 1) return setGananciaDiaria("Balance Negativo");

    const formatoCantidad = numberValue.toFixed(2);

    setGananciaDiaria(`${Math.abs(formatoCantidad)}%`);
  };

  return { gananciaDiaria, calcDifference, diffValues, handleDiffForm };
};
