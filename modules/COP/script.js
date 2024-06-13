const precio = document.getElementById("precio-COP"),
  usdt = document.getElementById("usdt"),
  tasaVenta = document.getElementById("tasa-venta-COP"),
  tasaCompra = document.getElementById("tasa-compra-COP"),
  ganancia = document.getElementById("ganancia"),
  cantidad = document.getElementById("cantidad"),
  resultado = document.getElementById("resultado"),
  mainElement = document.querySelector("main"),
  datosMemoria = document.querySelectorAll("[data-memoria]"),
  datosActualizar = document.querySelectorAll("[data-actualizar]");

const actualizarDatosMemoria = () => {
  datosMemoria.forEach((ele) => {
    const datos = localStorage.getItem(ele.id);

    if (datos !== null) ele.value = datos;

    ele.addEventListener("input", () => localStorage.setItem(ele.id, ele.value));
  });
};

const calcularTasaEspecial = () => {
  const tasaEspecial = (Number(tasaVenta.value) * 100) / Number(tasaCompra.value);

  const valorFinal = (tasaEspecial - 100).toFixed(2);

  if (Math.sign(valorFinal) === 1) return (ganancia.innerText = "Balance Negativo");

  ganancia.innerText = `${Math.abs(valorFinal)}%`;
};

const calcularPorcentaje = () => {
  if (!precio.value || precio.value == 0) return (ganancia.innerText = 0);

  tasaCompra.value = Number(precio.value) / Number(usdt.value);

  const porcentaje = (Number(tasaVenta.value) * 100) / tasaCompra.value - 100;

  if (Math.sign(porcentaje) === 1) return (ganancia.innerText = "Balance Negativo");

  ganancia.innerText = `${Math.abs(porcentaje.toFixed(2))}%`;
};

const calcularCantidad = () => {
  const cantidadResultado = Number(cantidad.value) * Number(tasaVenta.value);

  if (cantidadResultado > 999.99) {
    const formatoCantidad = cantidadResultado.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const separadorCantidad = formatoCantidad.split(",");

    const formatoCantidadResultado = `${separadorCantidad[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${
      separadorCantidad[1]
    }`;

    resultado.innerText = `${formatoCantidadResultado} COP`;
  } else {
    const formatoCantidadResultado = cantidadResultado.toFixed(2);

    resultado.innerText = `${formatoCantidadResultado.replace(".", ",")} COP`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  actualizarDatosMemoria();
  calcularPorcentaje();
  calcularCantidad();
});

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-ruta") === "index.html") {
    window.location.href = `../../index.html`;
    return;
  }

  if (e.target.hasAttribute("data-ruta")) {
    window.location.href = `../${e.target.getAttribute("data-ruta")}`;
  }
});

tasaCompra.addEventListener("input", calcularTasaEspecial);

datosActualizar.forEach((ele) => {
  ele.addEventListener("input", () => {
    calcularPorcentaje();
    calcularCantidad();
  });
});
