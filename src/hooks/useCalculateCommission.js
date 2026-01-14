import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSaldoTotal } from "../store/appSlice";
import { helpFormatMoney } from "../helpers/helpFormatMoney";
import { helpCalcCommission } from "../helpers/helpCalcCommission";
import { COMISION_PORCENTAJE } from "../constants";

// Hook calcular comision pago movil
export const useCalculateCommission = () => {
  const dispatch = useDispatch();
  const saldoTotal = useSelector((s) => s.app.saldoTotal);

  // Manejar formulario pago movil
  const handleAmountChange = (e) => {
    dispatch(setSaldoTotal(e.target.value));
  };

  // Comisión de pago movil
  const comision = useMemo(() => {
    const c = helpCalcCommission(saldoTotal, COMISION_PORCENTAJE);
    return helpFormatMoney(c, { currency: "Bs" });
  }, [saldoTotal]);

  // Cantidad neta a enviar por pago movil
  const saldoReal = useMemo(() => {
    const c = helpCalcCommission(saldoTotal, COMISION_PORCENTAJE);
    const neto = Number(saldoTotal) - c;
    return helpFormatMoney(neto, { currency: "Bs" });
  }, [saldoTotal]);

  return {
    saldoTotal,
    handleAmountChange,
    comision,
    saldoReal,
  };
};
