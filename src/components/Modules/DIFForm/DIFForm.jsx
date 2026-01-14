import { useCalculateCommission } from "../../../hooks/useCalculateCommission";
import { useCalculateDifference } from "../../../hooks/useCalculateDifference";

const DIFForm = () => {
  // Hook calcular comisión pago movil
  const { saldoTotal, handleAmountChange, comision, saldoReal } = useCalculateCommission();

  // Hook calcular diferencia diaria
  const { gananciaDiaria, diffValues, handleDiffForm } = useCalculateDifference();

  return (
    <aside className="minor-container">
      <form className="minor-form-container top">
        <label>Monto Pago Movil</label>
        <input type="number" value={saldoTotal} onChange={handleAmountChange} />

        <output>
          Enviar: {saldoReal}
          <br />
          <small>Comisión: {comision}</small>
        </output>
      </form>

      <form className="minor-form-container bottom">
        <label>Saldo Anterior</label>
        <input type="number" name="saldoAnterior" value={diffValues.saldoAnterior} onChange={handleDiffForm} />

        <label>Saldo Actual</label>
        <input type="number" name="saldoActual" value={diffValues.saldoActual} onChange={handleDiffForm} />

        <output>Diferencia: {gananciaDiaria}</output>
      </form>
    </aside>
  );
};

export default DIFForm;
