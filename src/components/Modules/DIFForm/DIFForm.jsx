/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { MainContext } from "../../../context/MainContext";
import { useCalculateCommission } from "../../../hooks/useCalculateCommission";
import { useCalculateDifference } from "../../../hooks/useCalculateDifference";

const DIFForm = () => {
  // Contexto
  const { customIds } = useContext(MainContext);

  // Contexto - id's
  const { comisionId, saldoAnteriorId, saldoActualId } = customIds;

  // Hook calculo comision
  const { saldo, handleAmountChange, comision, calcComission, saldoReal } = useCalculateCommission();

  // Hook calculo diferencia
  const { gananciaDiaria, calcDifference, diffValues, handleDiffForm } = useCalculateDifference();

  useEffect(() => {
    calcComission();
  }, [saldo]);

  useEffect(() => {
    calcDifference();
  }, [diffValues]);

  return (
    <aside className="minor-container">
      <form className="minor-form-container top">
        <label htmlFor={comisionId}>Saldo Total</label>
        <input
          type="number"
          id={comisionId}
          name="SaldoAntesDeComision"
          value={saldo.saldoTotal}
          onChange={handleAmountChange}
        />

        <output>
          Saldo Real: {saldoReal}
          <br />
          <small>Comisión: {comision}</small>
        </output>
      </form>

      <form className="minor-form-container bottom">
        <label htmlFor={saldoAnteriorId}>Saldo Anterior</label>
        <input
          type="number"
          id={saldoAnteriorId}
          name="saldoAnterior"
          value={diffValues.saldoAnterior}
          onChange={handleDiffForm}
        />

        <label htmlFor={saldoActualId}>Saldo Actual</label>
        <input
          type="number"
          id={saldoActualId}
          name="saldoActual"
          value={diffValues.saldoActual}
          onChange={handleDiffForm}
        />

        <output>Diferencia: {gananciaDiaria}</output>
      </form>
    </aside>
  );
};

export default DIFForm;
