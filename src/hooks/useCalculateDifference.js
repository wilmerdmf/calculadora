import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSaldoAnterior, setSaldoActual } from "../store/appSlice";
import { helpFormatMoney } from "../helpers/helpFormatMoney";
import { helpCalcPercentDiff } from "../helpers/helpCalcPercentDiff";

// Hook calcular diferencia diaria
export const useCalculateDifference = () => {
  const dispatch = useDispatch();
  const saldoAnterior = useSelector((s) => s.app.saldoAnterior);
  const saldoActual = useSelector((s) => s.app.saldoActual);

  // Manejar formulario de diferencia diaria
  const handleDiffForm = (e) => {
    const { name, value } = e.target;
    if (name === "saldoAnterior") dispatch(setSaldoAnterior(value));
    if (name === "saldoActual") dispatch(setSaldoActual(value));
  };

  // Diferencia diaria
  const gananciaDiaria = useMemo(() => {
    const diff = Number(saldoActual) - Number(saldoAnterior);
    const pct = helpCalcPercentDiff(saldoAnterior, saldoActual);

    if (!pct && !diff) return "0,00 (0%)";

    return `${helpFormatMoney(diff, { sign: true })} (${pct >= 0 ? "+" : "-"}${Math.abs(pct).toFixed(2)}%)`;
  }, [saldoAnterior, saldoActual]);

  return {
    gananciaDiaria,
    diffValues: { saldoAnterior, saldoActual },
    handleDiffForm,
  };
};
