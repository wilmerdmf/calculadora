/* eslint-disable react/prop-types */

import { useCallback, useId, useState } from "react";
import { MainContext } from "./MainContext";

export function MainContextProvider({ children }) {
  // Custom Id's
  const precioCompraId = useId(),
    tasaCompraUsdtId = useId(),
    tasaVentaId = useId(),
    tasaCompraId = useId(),
    montoId = useId(),
    comisionId = useId(),
    saldoAnteriorId = useId(),
    saldoActualId = useId();

  // Estado tasaUSDT
  const [tasaUSDT, setTasaUSDT] = useState({
    precioUsdtCompra: 0,
  });

  // Manejador del formulario tasaUsdt
  const handleUSDTChange = (e) => {
    const { value } = e.target;
    setTasaUSDT({
      ...tasaUSDT,
      precioUsdtCompra: value,
    });
  };

  // Estado monto
  const [monto, setMonto] = useState({
    montoFinal: 0,
  });

  // Manejador del formulario monto
  const handleMontoChange = (e) => {
    const { value } = e.target;
    setMonto({
      ...monto,
      montoFinal: value,
    });
  };

  // Guardar datos globales en el LocalStorage
  const saveGlobalData = useCallback(() => {
    localStorage.setItem("tasaUSDTData", JSON.stringify(tasaUSDT));
    localStorage.setItem("montoData", JSON.stringify(monto));
  }, [tasaUSDT, monto]);

  // Cargar datos globales desde el LocalStorage
  const loadGlobalData = () => {
    const storedUSDTData = localStorage.getItem("tasaUSDTData");
    const storedMontoData = localStorage.getItem("montoData");

    if (storedUSDTData && typeof storedUSDTData === "string") {
      try {
        const parsedUSDTData = JSON.parse(storedUSDTData);

        if (parsedUSDTData && typeof parsedUSDTData === "object") {
          setTasaUSDT({
            ...tasaUSDT,
            precioUsdtCompra: parsedUSDTData.precioUsdtCompra || 0,
          });
        }
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    }

    if (storedMontoData && typeof storedMontoData === "string") {
      try {
        const parsedMontoData = JSON.parse(storedMontoData);

        if (parsedMontoData && typeof parsedMontoData === "object") {
          setMonto({
            ...monto,
            montoFinal: parsedMontoData.montoFinal || 0,
          });
        }
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    }
  };

  // Proveedor Id's
  const customIds = {
    precioCompraId,
    tasaCompraUsdtId,
    tasaVentaId,
    tasaCompraId,
    montoId,
    comisionId,
    saldoAnteriorId,
    saldoActualId,
  };

  // Proveedor variables y estados
  const state = {
    tasaUSDT,
    handleUSDTChange,
    monto,
    handleMontoChange,
    saveGlobalData,
    loadGlobalData,
  };

  return <MainContext.Provider value={{ customIds, state }}>{children}</MainContext.Provider>;
}
