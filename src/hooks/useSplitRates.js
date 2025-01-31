import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const useSplitRates = (tasaActual) => {
  const { state } = useContext(MainContext);
  const { tasaFinalVzla, setTasaFinalVzla } = state;

  // Manejador para establecer tasa original
  const handleActualVzlaRate = (e) => {
    e.preventDefault();
    setTasaFinalVzla(tasaActual);
    localStorage.setItem("tasaFinalVzlaData", JSON.stringify(tasaFinalVzla));
  };

  // Tasa de Venezuela dividida por monto
  const tasasDivididas = {
    tasa1: `${Number(tasaFinalVzla)}`,
    tasa2: `${(Number(tasaFinalVzla) + 0.0002).toFixed(4)}`,
    tasa3: `${(Number(tasaFinalVzla) + 0.0004).toFixed(4)}`,
    tasa4: `${(Number(tasaFinalVzla) + 0.0007).toFixed(4)}`,
  };

  // Cargar data de local storage
  const loadData = () => {
    const storedTasaData = localStorage.getItem("tasaFinalVzlaData");

    if (storedTasaData && typeof storedTasaData === "string") {
      try {
        const parsedUSDTData = JSON.parse(storedTasaData);

        if (parsedUSDTData && typeof parsedUSDTData === "string") {
          setTasaFinalVzla(parsedUSDTData);
        }
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    }
  };

  return { handleActualVzlaRate, tasasDivididas, loadData };
};

export default useSplitRates;
