/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useSplitRates from "../../../hooks/useSplitRates";
import PropTypes from "prop-types";

const ModuloMultiTasa = ({ form }) => {
  // Hook dividir tasas
  const { handleActualVzlaRate, tasasDivididas, loadData } = useSplitRates(form.tasaVenta);

  // Cargar datos del local storage
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="modulo-multi-tasa">
        <button onClick={handleActualVzlaRate}>
          <span>Establecer Tasa</span>
        </button>
        <p>10.000 ⮕ {tasasDivididas.tasa1}</p>
        <p>50.000 ⮕ {tasasDivididas.tasa2}</p>
        <p>100.000 ⮕ {tasasDivididas.tasa3}</p>
        <p>500.000 ⮕ {tasasDivididas.tasa4}</p>
      </div>
    </>
  );
};

ModuloMultiTasa.propTypes = {
  form: PropTypes.shape({
    tasaVenta: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ModuloMultiTasa;
