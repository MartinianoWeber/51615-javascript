const form = document.querySelector('form');
const montoInput = document.getElementById('monto');
const plazoSelect = document.getElementById('plazo');
const tasaInput = document.getElementById('tasa');
const resultadosDiv = document.getElementById('resultados');
const resultadoContainer = document.getElementById('resultado');
const bntSi = document.getElementById('bntSi');
const bntNo = document.getElementById('btnNo');
const inputs = document.querySelectorAll('.simulador__formulario-cotizacion-inputs');
const botonCalcular1 = document.querySelector('.simulador__formulario-cotizacion-button');
const botonCalcular2 = document.querySelector('.simulador__formularioFin-form-button');
const ultimoFormulario = document.getElementById('ultimoFormulario');
const formulario2 = document.getElementById('formulario2');
const inputsFormulario2 = document.querySelectorAll('.simulador__formularioFin-form-input');
const documentType = document.getElementById('documentType');
const documentNumber = document.getElementById('documentNumber');
const error = document.querySelector('.error');

let validar = false
let validar2 = false
function calcularPrestamo() {
    const monto = montoInput.value;
    const plazo = plazoSelect.value;
    const tasa = tasaInput.value / 100;

    const cuotaConComa = (Math.round(monto * tasa / plazo)).toFixed(2).replace('.', ',');
    resultadoContainer.classList.remove('disable');
    resultadosDiv.innerHTML = `Cuota mensual: $${cuotaConComa}`;
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (inputs[0].value && inputs[1].value) {
            botonCalcular1.classList.remove('buttonDisable');
            validar = true;
        } else {
            botonCalcular1.classList.add('buttonDisable');
            validar = false;
        }
    });
});

inputsFormulario2.forEach(input => {
    console.log(inputsFormulario2);
    input.addEventListener('input', () => {
        if (inputsFormulario2[0].value && inputsFormulario2[1].value && inputsFormulario2[2].value && inputsFormulario2[4].value && inputsFormulario2[5].value) {

            botonCalcular2.classList.remove('buttonDisable');
            validar2 = true;
        } else {
            botonCalcular2.classList.add('buttonDisable');
            validar2 = false;
        }
    });
});
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validar) {
        calcularPrestamo();
    }
});

formulario2.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validar2) {
        envioFormulario()
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 && validar) {
        envioFormulario()
    }
});


documentType.addEventListener('change', function () {
    if (!error.classList.contains('disable')) {
        error.classList.add('disable');
    }
    if (documentType.value === 'DNI') {
        inputsFormulario2[2].setAttribute('maxlength', '8');
        console.log(inputsFormulario2[2]);
    } else if (documentType.value === 'Pasaporte') {
        inputsFormulario2[2].setAttribute('maxlength', '10');
    }
});

documentNumber.addEventListener('input', function () {
    if (documentType.value === 'DNI' && documentNumber.value.length > 8) {
        documentNumber.value = documentNumber.value.slice(0, 8);
    } else if (documentType.value === 'Pasaporte' && documentNumber.value.length > 10) {
        documentNumber.value = documentNumber.value.slice(0, 10);
    }
    if (documentType.value !== 'DNI' && documentType.value !== 'Pasaporte') {
        error.classList.remove('disable');
    }
});



function envioFormulario() {
    const nombre = inputsFormulario2[0].value;
    const apellido = inputsFormulario2[1].value;
    const dni = inputsFormulario2[2].value;
    const email = inputsFormulario2[3].value;
    const telefono = inputsFormulario2[4].value;
    const direccion = inputsFormulario2[5].value;
    const monto = montoInput.value;
    const plazo = plazoSelect.value;
    const tasa = tasaInput.value / 100;
    const cuota = (Math.round(monto * tasa / plazo)).toFixed(2).replace('.', ',');
    const interes = (Math.round(monto * tasa)).toFixed(2).replace('.', ',');
    const total = (Math.round(monto * tasa + monto)).toFixed(2).replace('.', ',');
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
        direccion,
        monto,
        plazo,
        tasa,
        cuota,
        interes,
        total,
        fechaActual,
        fechaVencimiento
    }
    console.log(datos);
    formulario2.reset();
    form.reset();
    ultimoFormulario.classList.add('disable');
    resultadoContainer.classList.add('disable');
    botonCalcular2.classList.add('buttonDisable');
    validar2 = false;
    validar = false;
    return datos;
}


bntSi.addEventListener('click', function () {
    form.reset();
    resultadoContainer.classList.add('disable');
    botonCalcular1.classList.add('buttonDisable');
    validar = false;

});

bntNo.addEventListener(('click'), function () {
    ultimoFormulario.classList.remove('disable');
});




