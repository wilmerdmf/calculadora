import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setTasaUSDT, setMonto } from "../../../store/appSlice";
import { useCurrencyForm } from "../../../hooks/useCurrencyForm";
import TieredRates from "./TieredRates";

const CurrencyForm = () => {
  const dispatch = useDispatch();
  const { currency } = useParams();

  const currentCurrency = currency?.toUpperCase() || "VES";

  // Hook general del formulario
  const { form, handleFormChange, tasaCompra, porcentaje, resultado, tasaUSDT, monto } =
    useCurrencyForm(currentCurrency);

  // Handlers Redux
  const handleUSDTChange = (e) => {
    dispatch(setTasaUSDT(e.target.value));
  };

  const handleMontoChange = (e) => {
    dispatch(setMonto(e.target.value));
  };

  return (
    <>
      <main className="main-container">
        <form className="main-form-container top">
          <div className="input-group uno">
            <label>Precio de Compra</label>
            <input type="number" name="precioCompra" value={form.precioCompra} onChange={handleFormChange} required />
          </div>
          <div className="input-group dos">
            <label>Precio USDT</label>
            <input type="number" name="tasaUSDT" value={tasaUSDT} onChange={handleUSDTChange} required />
          </div>
          <div className="input-group tres">
            <label>Tasa de Venta</label>
            <input type="number" name="tasaVenta" value={form.tasaVenta} onChange={handleFormChange} required />
          </div>
          <div className="input-group cuatro">
            <label>Tasa de Compra</label>
            <input type="number" value={tasaCompra} disabled required />
          </div>

          <div className="ptext-container">
            <label>Porcentaje de ganacia</label>
            <output>{porcentaje}</output>
          </div>
        </form>

        <form className="main-form-container bottom">
          <div className="input-group cinco">
            <label>Monto</label>
            <input type="number" name="montoTotal" value={monto} onChange={handleMontoChange} required />
          </div>

          <div className="rtext-container">
            <label>Monto a enviar</label>
            <output>{resultado}</output>
          </div>
        </form>
      </main>

      {currentCurrency === "VES" && <TieredRates form={form} />}
    </>
  );
};

export default CurrencyForm;
