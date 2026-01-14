import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasaFinalVzla } from "../store/appSlice";
import { RATE_INCREMENTS } from "../constants";

// Hook dividir tasas para el componente TieredRates
export const useSplitRates = (tasaActual) => {
  const dispatch = useDispatch();
  const tasaFinalVzla = useSelector((state) => state.app.tasaFinalVzla);

  // Cargar datos al montar
  useEffect(() => {
    const storedTasaData = localStorage.getItem("tasaFinalVzlaData");

    if (storedTasaData) {
      try {
        const parsedData = JSON.parse(storedTasaData);
        if (parsedData) {
          dispatch(setTasaFinalVzla(parsedData));
        }
      } catch (error) {
        console.error("Error cargando tasaFinalVzlaData:", error);
      }
    }
  }, [dispatch]);

  // Establecer tasa actual VES
  const handleActualVzlaRate = (e) => {
    e.preventDefault();

    if (!tasaActual) return;

    dispatch(setTasaFinalVzla(tasaActual));
  };

  // Calcular tasas para el componente TieredTRates
  const tasasDivididas = useMemo(() => {
    const baseRate = Number(tasaFinalVzla);

    return {
      tasa1: baseRate.toFixed(4),
      tasa2: (baseRate + RATE_INCREMENTS.tier2).toFixed(4),
      tasa3: (baseRate + RATE_INCREMENTS.tier3).toFixed(4),
      tasa4: (baseRate + RATE_INCREMENTS.tier4).toFixed(4),
    };
  }, [tasaFinalVzla]);

  return {
    handleActualVzlaRate,
    tasasDivididas,
  };
};
