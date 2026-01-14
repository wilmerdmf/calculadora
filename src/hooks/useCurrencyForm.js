import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrencyForm } from "../store/appSlice";
import { helpCalcRate } from "../helpers/helpCalcRate";
import { helpCalcPercentGain } from "../helpers/helpCalcPercentGain";
import { helpFormatMoney } from "../helpers/helpFormatMoney";

const DEFAULT_FORM = { precioCompra: "", tasaVenta: "" };

// Hook general del formulario de divisas
export const useCurrencyForm = (currency) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => {
    return state?.app?.currencyForms?.[currency] || DEFAULT_FORM;
  });
  const tasaUSDT = useSelector((state) => state?.app?.precioUsdtCompra || 0);
  const monto = useSelector((state) => state?.app?.montoFinal || 0);

  // Manejar formulario de precioCompra y tasaVenta
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setCurrencyForm({
        currency,
        field: name,
        value,
      })
    );
  };

  // Tasa USDT
  const tasaCompra = useMemo(() => {
    return helpCalcRate(form.precioCompra, tasaUSDT);
  }, [form.precioCompra, tasaUSDT]);

  // Porcentaje
  const porcentaje = useMemo(() => {
    return helpCalcPercentGain(form.precioCompra, form.tasaVenta, tasaUSDT);
  }, [form.precioCompra, form.tasaVenta, tasaUSDT]);

  // Monto a enviar en divisa
  const resultado = useMemo(() => {
    const montoBruto = Number(monto) * Number(form.tasaVenta);
    return helpFormatMoney(montoBruto, { currency });
  }, [monto, form.tasaVenta, currency]);

  return {
    form,
    handleFormChange,
    tasaCompra,
    porcentaje,
    resultado,
    tasaUSDT,
    monto,
  };
};
