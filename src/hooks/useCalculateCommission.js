import { useState } from "react";
import { helpFormatAmount } from "../helpers/helpFormatAmount";

export const useCalculateCommission = () => {
  // Estado saldo
  const [saldo, setSaldo] = useState({
    saldoTotal: 0,
  });

  // Manejador del formulario saldo
  const handleAmountChange = (e) => {
    const { value } = e.target;
    setSaldo({
      ...saldo,
      saldoTotal: value,
    });
  };

  // Estado comision
  const [comision, setComision] = useState(0);

  // Estado saldo real
  const [saldoReal, setSaldoReal] = useState(0);

  // Calcular comisión y saldo real
  const calcComission = () => {
    const comisionFinal = (Number(saldo.saldoTotal) * 0.3) / 100;

    const saldoRestante = Number(saldo.saldoTotal) - comisionFinal;

    helpFormatAmount(saldoRestante, setSaldoReal, "Bs");

    helpFormatAmount(comisionFinal, setComision, "Bs");
  };

  return { saldo, handleAmountChange, comision, calcComission, saldoReal };
};
