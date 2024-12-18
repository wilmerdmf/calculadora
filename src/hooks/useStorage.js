/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";

export const useStorage = (currentForm, updateForm, dataName) => {
  const { state } = useContext(MainContext);
  const { loadGlobalData } = state;

  // Guardar datos en el localStorage
  const saveFormData = () => {
    localStorage.setItem(dataName, JSON.stringify(currentForm));
  };

  // Cargar datos desde el localStorage
  const loadFormData = () => {
    const storedFormData = localStorage.getItem(dataName);
    if (storedFormData && typeof storedFormData === "string") {
      try {
        const parsedFormData = JSON.parse(storedFormData);
        if (parsedFormData && typeof parsedFormData === "object") {
          updateForm((prevForm) => ({
            ...prevForm,
            precioCompra: parsedFormData.precioCompra || 0,
            tasaVenta: parsedFormData.tasaVenta || 0,
          }));
        }
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    }
  };

  useEffect(() => {
    loadFormData();
    loadGlobalData();
  }, []);

  return { saveFormData, loadFormData };
};
