export const useHandleForm = (currentForm, updateForm) => {
  // Manejador del formulario precioCompra - tasaVenta
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateForm({
      ...currentForm,
      [name]: value,
    });
  };

  return { handleFormChange };
};
