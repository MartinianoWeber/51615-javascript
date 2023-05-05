// console.log("Hola Mundo")
/*
console.log("Hola Mundo 2")
console.log("Hola Mundo 3")
console.log("Hola Mundo 4")
*/

// Tenemos 3 formas de variables

// 1. var NO SE UTILIZA MAS
// 2. let
// 3. const

// var miPrimerVariable  // camelCase
// var mi_primer_variable // Kebab case



// let variable1 = 20;

// var variable2 = 10;

// function prueba() {
//     var variableVAR = 10;
//     // ESTO ES FUERA
//     if (variableVAR == 10) {
//         let variableLET = 20;
//         // ESTO ES DENTRO
//         console.log(variableLET)
//     }
//     // ESTO ES FUERA
//     console.log(variableLET)
// }
// prueba()


// const valor1 = 20;
// const valor2 = 10;

// let resultado = valor1 + valor2;
// // resultado = 30

// resultado = valor1 - valor2
// // resultado = 10

// resultado = valor1 * valor2
// // resultado = 200

// const palabra1 = "Coder"
// const palabra2 = "House"
// const blanco = " "

// let resultado = palabra1 + palabra2 + 1
// let resultado2 = `${palabra1} y ${palabra2} {1}` // `` === ""


// const edad = parseFloat(prompt("Ingresa tu edad"))

// console.log(edad)

let nombreIngresado = prompt("Ingresa tu nombre")

if ((nombreIngresado)) {
    console.log("Bienvenida")
}

if ((nombreIngresado) && (nombreIngresado == "EMMA") || (nombreIngresado == "ema")) {
    console.log("Bienvenida2")
}