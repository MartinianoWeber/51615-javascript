// let edad = prompt("¿Cual es tu edad?");

// if (edad >= 18 && edad < 40) {
//     console.log("Tu edad es: " + edad + " y eres mayor de edad pero joven");

// } else if (edad >= 40) {
//     console.log("Tu edad es: " + edad + " y eres mayor de edad");
// }


// else if (edad < 18 && edad >= 12) {
//     console.log("Tu edad es: " + edad + " y eres adolescente");
// }

// else {
//     console.log("Tu edad es: " + edad + " no cumplis con encuesta");
// }

const nombre = prompt("¿Cual es tu nombre?").toLowerCase()
let variableLetra = nombre.charAt(0).toUpperCase()

// if ((nombre != "") && (nombre != "Pedro") && (nombre != "Juan")) {
//     console.log("Tu nombre es: " + nombre);
// } else {
//     console.log("No admitido");
// }


// if (nombre == "Martiniano" || nombre == "MARTINIANO" || nombre == "martiniano") {
//     console.log("Tu nombre es: " + nombre);
// }

if (nombre == "martiniano") {
    console.log("Tu nombre es: " + nombre);

    console.log(variableLetra + nombre.slice(1))
}


// if (nombre == "Pedro" || nombre == "Juan") {
//     console.log("Tu nombre es: " + nombre);
// }





// if (numero == 5) {
//     // PASA ESTO
//     console.log("Tu numero favorito es: " + numero);
// } else {
//     console.log("Tu numero favorito no es 5");
// }

// if (nombre) {
//     // PASA ESTO
// }