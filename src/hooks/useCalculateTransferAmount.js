import { useState } from "react";
import { helpFormatAmount } from "../helpers/helpFormatAmount";

export const useCalculateTransferAmount = (currentForm, amount, currency) => {
  // Estado Resultado
  const [resultado, setResultado] = useState("0");

  // Calcular monto a enviar
  const calcAmount = () => {
    const montoBruto = Number(amount.montoFinal) * Number(currentForm.tasaVenta);

    helpFormatAmount(montoBruto, setResultado, currency);
  };

  return { resultado, calcAmount };
};
