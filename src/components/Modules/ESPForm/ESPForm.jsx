/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import { useHandleForm } from "../../../hooks/useHandleForm";
import { useStorage } from "../../../hooks/useStorage";
import { useCalculateProfit } from "../../../hooks/useCalculateProfit";
import { useCalculateTransferAmount } from "../../../hooks/useCalculateTransferAmount";

const ESPForm = () => {
  // Estado precioCompra - tasaVenta
  const [espForm, setEspForm] = useState({
    precioCompra: 0,
    tasaVenta: 0,
  });

  // Contexto
  const { customIds, state } = useContext(MainContext);

  // Contexto - id's
  const { precioCompraId, tasaCompraUsdtId, tasaVentaId, tasaCompraId, montoId } = customIds;

  // Contexto - states y storage
  const { tasaUSDT, handleUSDTChange, monto, handleMontoChange, saveGlobalData } = state;

  // Hook manejador de formulario
  const { handleFormChange } = useHandleForm(espForm, setEspForm);

  // Hook localStorage
  const { saveFormData } = useStorage(espForm, setEspForm, "espFormData");

  // Hook calculo porcentaje de ganancia
  const { tasaCompra, porcentaje, calcProfit } = useCalculateProfit(espForm, tasaUSDT);

  // Hook calculo remesa
  const { resultado, calcAmount } = useCalculateTransferAmount(espForm, monto, "ESP");

  useEffect(() => {
    calcProfit();
    calcAmount();
    saveGlobalData();
    saveFormData();
  }, [espForm, tasaUSDT, monto]);

  return (
    <main className="main-container">
      <form className="main-form-container top">
        <div className="input-group uno">
          <label htmlFor={precioCompraId}>Precio de Compra</label>
          <input
            type="number"
            id={precioCompraId}
            name="precioCompra"
            value={espForm.precioCompra}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="input-group dos">
          <label htmlFor={tasaCompraUsdtId}>Precio USDT</label>
          <input
            type="number"
            id={tasaCompraUsdtId}
            name="tasaUSDT"
            value={tasaUSDT.precioUsdtCompra}
            onChange={handleUSDTChange}
            required
          />
        </div>

        <div className="input-group tres">
          <label htmlFor={tasaVentaId}>Tasa de Venta</label>
          <input
            type="number"
            id={tasaVentaId}
            name="tasaVenta"
            value={espForm.tasaVenta}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="input-group cuatro">
          <label htmlFor={tasaCompraId}>Tasa de Compra</label>
          <input type="number" id={tasaCompraId} name="tasaCompra" value={tasaCompra} disabled required />
        </div>

        <output>{porcentaje}</output>
      </form>

      <form className="main-form-container bottom">
        <div className="input-group cinco">
          <label htmlFor={montoId}>Monto</label>
          <input
            type="number"
            id={montoId}
            name="montoTotal"
            value={monto.montoFinal}
            onChange={handleMontoChange}
            required
          />
        </div>

        <output>{resultado}</output>
      </form>
    </main>
  );
};

export default ESPForm;
