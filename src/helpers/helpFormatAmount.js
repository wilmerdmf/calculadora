export const helpFormatAmount = (amount, setterFunction, currency) => {
  // Formatea el output agregando separadores de decimales y miles
  let formatoCantidadResultado;

  if (amount > 999.99) {
    const formatoCantidad = amount.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const separadorCantidad = formatoCantidad.split(",");

    formatoCantidadResultado = `${separadorCantidad[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${separadorCantidad[1]}`;

    setterFunction(`${formatoCantidadResultado} ${currency}`);
  } else {
    formatoCantidadResultado = amount.toFixed(2).replace(".", ",");

    setterFunction(`${formatoCantidadResultado} ${currency}`);
  }
};
