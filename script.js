const cantidad = document.getElementById("cantidad-bolivar"),
  resultado = document.getElementById("resultado"),
  datosMemoria = document.querySelectorAll("[data-memoria]"),
  datosActualizar = document.querySelectorAll("[data-actualizar]"),
  boton = document.getElementById("procesar"),
  comisionTotal = document.getElementById("comision");

const actualizarDatosMemoria = () => {
  datosMemoria.forEach((ele) => {
    const datos = localStorage.getItem(ele.id);

    if (datos !== null) ele.value = datos;

    ele.addEventListener("input", () =>
      localStorage.setItem(ele.id, ele.value)
    );
  });
};

const calcularComision = () => {
  const comision = (Number(cantidad.value) * 0.3) / 100;

  const valorFinal = Number(cantidad.value) - comision;

  if (valorFinal > 999.99) {
    const formatoCantidad = valorFinal.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const separadorCantidad = formatoCantidad.split(",");

    const formatoCantidadResultado = `${separadorCantidad[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    )},${separadorCantidad[1]}`;

    resultado.innerText = `${formatoCantidadResultado} Bs`;
  } else {
    const formatoCantidadResultado = valorFinal.toFixed(2);

    resultado.innerText = `${formatoCantidadResultado.replace(".", ",")} Bs`;
  }

  comisionTotal.innerText = `Comisión: ${comision
    .toFixed(2)
    .replace(".", ",")} Bs`;
};

document.addEventListener("DOMContentLoaded", () => {
  actualizarDatosMemoria();
  calcularComision();
});

document.addEventListener("click", (e) => {
  if (e.target === boton) {
    e.preventDefault();
    actualizarDatosMemoria();
    calcularComision();
  }

  if (e.target.getAttribute("data-ruta") === "index.html") {
    window.location.href = `./index.html`;
    return;
  }

  if (e.target.hasAttribute("data-ruta")) {
    window.location.href = `./modules/${e.target.getAttribute("data-ruta")}`;
  }
});

datosActualizar.forEach((ele) => {
  ele.addEventListener("input", () => {
    calcularComision();
  });
});
