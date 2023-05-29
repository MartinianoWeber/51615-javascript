const form1 = document.getElementById("form1");
const montoInput = document.getElementById("monto");
const plazoInput = document.getElementById("plazo");
const tasaInput = document.getElementById("tasa");
const resultadoContainer = document.getElementById("resultadoContainer");
const resultado = document.getElementById("resultado");
const inputsForm1 = document.querySelectorAll(
  ".simulador__formulario-cotizacion-inputs"
);
const inputsForm2 = document.querySelectorAll(
  ".simulador__formularioFin-form-input"
);
const btnCotizar = document.getElementById("btnCotizar");
const btnForm2 = document.getElementById("btnForm2");
const bntSi = document.getElementById("bntSi");
const btnNo = document.getElementById("btnNo");
const ultimoFormulario = document.getElementById("ultimoFormulario");
const formulario2 = document.getElementById("formulario2");
const documentType = document.getElementById("documentType");
const documentNumber = document.getElementById("documentNumber");
const error = document.querySelector(".error");
// 15/05
const btnCotizaciones = document.getElementById("btnCotizaciones");
const btnBorrarCotizacion = document.getElementById("btnBorrarCotizacion");
const containerDeCotizaciones = document.getElementById(
  "containerDeCotizaciones"
);
const btnBorrarEspecifico = document.getElementById("btnBorrarEspecifico");
const containerBorrar = document.getElementById("containerBorrar");
const inputBorrar = document.getElementById("inputBorrar");
const btnBorrar = document.getElementById("btnBorrar");

let validar = false;
let validar2 = false;
let cotizaciones = [];

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  validar && calcularPrestamo();
});

// 22/05 / EXPLICACION DEL OR

// document.addEventListener("DOMContentLoaded", () => {
//   let cotizacion = JSON.parse(localStorage.getItem("cotizacion")) || [];
//   console.log(cotizacion);
//   if (cotizacion.length > 0) {
//     cotizacion.forEach((cotizacion) => {
//       cotizaciones.push(cotizacion);
//     });
//   }
// });

// 22/05 / EXPLICACION DEL NULLISH COALESCING OPERATOR

document.addEventListener("DOMContentLoaded", () => {
  let cotizacion = localStorage.getItem("cotizacion");
  const verificacion = cotizacion ?? []; // SOLAMENTE TOMA EL VALOR [] SI ES NULL O UNDEFINED
  console.log(verificacion);
  if (verificacion.length > 0) {
    JSON.parse(verificacion).forEach((cotizacion) => {
      cotizaciones.push(cotizacion);
    });
  }
});

function calcularPrestamo() {
  const monto = montoInput.value;
  const plazo = plazoInput.value;
  const tasa = tasaInput.value / 100;

  const cuotaConComa = Math.round((monto * tasa) / plazo)
    .toFixed(2)
    .replace(".", ",");

  resultadoContainer.classList.remove("disable");
  resultado.innerText = `Cuota mensual: $${cuotaConComa}`;
}

// VALIDACIONES

inputsForm1.forEach((input) => {
  input.addEventListener("input", () => {
    if (inputsForm1[0].value && inputsForm1[1].value) {
      btnCotizar.classList.remove("buttonDisable");
      validar = true;
    } else {
      btnCotizar.classList.add("buttonDisable");
      validar = false;
    }
  });
});

inputsForm2.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      inputsForm2[0].value &&
      inputsForm2[1].value &&
      inputsForm2[2].value &&
      inputsForm2[3].value &&
      inputsForm2[4].value &&
      inputsForm2[5].value
    ) {
      btnForm2.classList.remove("buttonDisable");
      validar2 = true;
    } else {
      btnForm2.classList.add("buttonDisable");
      validar2 = false;
    }
  });
});

// PANTALLITA VERDE

bntSi.addEventListener("click", () => {
  form1.reset();
  resultadoContainer.classList.add("disable");
  btnCotizar.classList.add("buttonDisable");
});

btnNo.addEventListener("click", () => {
  ultimoFormulario.classList.remove("disable");
});

// SECCION FORMULARIO 2

formulario2.addEventListener("submit", (event) => {
  event.preventDefault();
  validar2 && enviarFormulario();
});

function enviarFormulario() {
  const nombre = inputsForm2[0].value;
  const apellido = inputsForm2[1].value;
  const dni = inputsForm2[4].value;
  const email = inputsForm2[2].value;
  const telefono = inputsForm2[5].value;
  const monto = montoInput.value;
  const plazo = plazoInput.value;
  const tasa = tasaInput.value / 100;
  const cuota = Math.round((monto * tasa) / plazo);
  const interes = Math.round(monto * tasa);
  const total = Math.round(monto * tasa + monto)
    .toFixed(2)
    .replace(".", ",");
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();
  const fechaActual = `${dia}/${mes}/${año}`;
  const fechaVencimiento = `${dia + 1}/${mes}/${año}`;

  const datos = {
    nombre,
    apellido,
    dni,
    email,
    telefono,
    monto,
    plazo,
    tasa,
    cuota,
    interes,
    total,
    fechaActual,
    fechaVencimiento,
  };

  // JSON
  cotizaciones.push(datos);
  localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));

  alert(
    "Su solicitud ha sido enviada con éxito, la pagina sera recargada en 2 segundos"
  );
  setTimeout(() => {
    location.reload();
  }, 2000);
}
function cargarCotizaciones() {
  containerDeCotizaciones.innerHTML = "";

  cotizaciones.length > 0
    ? cotizaciones.forEach((cotizacion) => {
        // console.log(cotizacion);
        const { nombre, apellido, dni, cuota, interes } = cotizacion;
        containerDeCotizaciones.innerHTML += `<p>Nombre: ${
          nombre || "No hay datos"
        } - Apellido: ${apellido} - DNI: ${
          dni || "No hay datos"
        } - Cuota ${cuota} - Interes ${interes}</p>
        <button class="btnBorrarCoti" value="${dni}">X</button>
        `;
      })
    : (containerDeCotizaciones.innerHTML = `<p>No hay cotizaciones</p>`);
}

btnCotizaciones.addEventListener("click", () => {
  cargarCotizaciones();
  const btnBorrarCoti = document.querySelectorAll(".btnBorrarCoti");
  //   console.log(btnBorrarCoti);
  actionBorrar(btnBorrarCoti);
});

function actionBorrar(btnBorrarCoti) {
  btnBorrarCoti.forEach((btn) => {
    btn.addEventListener("click", () => {
      //   console.log(cotizaciones);
      let busqueda = cotizaciones
        .map((cotizacion) => cotizacion.dni)
        .indexOf(btn.value);
      cotizaciones.splice(busqueda, 1);
      localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));
      cargarCotizaciones();
    });
  });
}

documentType.addEventListener("change", () => {
  if (!error.classList.contains("disable")) {
    error.classList.add("disable");
  }
});

documentNumber.addEventListener("input", () => {
  if (documentNumber.value.length >= 8 && documentType.value == "DNI") {
    // console.log(documentNumber.value);
    documentNumber.value = documentNumber.value.slice(0, 8);
  } else if (
    documentNumber.value.length >= 10 &&
    documentType.value == "Pasaporte"
  ) {
    documentNumber.value = documentNumber.value.slice(0, 10);
  }

  if (documentType.value != "DNI" && documentType.value != "Pasaporte") {
    error.classList.remove("disable");
  }
});

// 22/05/2023

// OPERADOR ++
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let i = 0

// i++ // 1

// OPERADOR --
// for(let i = 0; i < -5; i--){
//     console.log(i)
// }

// let i = 0

// i-- // 1

const obj = {
  nombre_primero: "Juan",
  apellido: "Perez",
  trabajos: {
    trabajo1: "Programador",
    trabajo2: "Diseñador",
  },
};

// ALIAS
const {
  nombre_primero: nombre,
  apellido,
  trabajos: { trabajo1: trabajo },
} = obj;

// console.log(nombre, apellido, trabajo);

// const desestructuracion = (elemento) => {
//   const {
//     nombre_primero,
//     apellido,
//     trabajos: { trabajo1 },
//   } = elemento;
//   return nombre_primero, apellido, trabajo1
// };

// desestructuracion(obj);

const funcionesPersona = () => {
  return {
    comer: () => {
      console.log("la persona come");
    },
    correr: (elemento) => {
      console.log(elemento);
    },
  };
};

const { comer, correr } = funcionesPersona();

// correr("Esta corriendo");

const nombres = ["Juan", "Pedro", "Maria", "Jose"]; // 4

const [a, , , d] = nombres;
console.log(a, d);

window.addEventListener("click", ({ y, x }) => {
  console.log(y, x);
});
