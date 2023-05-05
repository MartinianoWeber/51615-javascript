// function holaMundo() // Declaracion de la funcion
// {
//   alert("Hola Mundo"); // Bloque de instruccion
// }

// holaMundo(); // Llamada a la funcion


// function getPerson() {
//   let nombre = prompt("Ingresa tu nombre");
//   alert("Hola " + nombre);
// }

// getPerson()
// getPerson()


// function suma(a, b) {
//   console.log(`La suma de ${a} + ${b} es: ${a + b}`);
// }

// suma(3, 5)

// function returnNombre(nombre) {
//   return `Hola ${nombre}`;
// }

// let nombre = prompt("Ingresa tu nombre");

// console.log('Desde el console log ' + returnNombre(nombre));

// let nombreDeclarado = returnNombre(nombre);

// console.log('Desde la variable ' + nombreDeclarado);

// if (returnNombre(nombre) === 'Hola Juan') {
//   console.log('Hola Juan');
// } else {
//   console.log('No es Juan');
// }

// function calculadora(a, b, operacion) {
//   switch (operacion) {
//     case 'suma':
//       return a + b;
//     case 'resta':
//       return a - b;
//     case 'multiplicacion':
//       return a * b;
//     case 'division':
//       return a / b;
//     default:
//       return 'Syntax Error';
//   }
// }

// let trueOfalse = true;

// let valor1 = Number(prompt('Ingresa el primer valor'));
// let valor2 = Number(prompt('Ingresa el segundo valor'));
// let operacion = prompt('Ingresa la operacion\nsuma\nresta\nmultiplicacion\ndivision');


// while (trueOfalse) {
//   if (valor1 === 0 || valor2 === 0 || operacion === '') {
//     valor1 = Number(prompt('Ingresa el primer valor'));
//     valor2 = Number(prompt('Ingresa el segundo valor'));
//     operacion = prompt('Ingresa la operacion\nsuma\nresta\nmultiplicacion\ndivision');
//   } else {
//     console.log(valor1, valor2, operacion);
//     let resultado = calculadora(valor1, valor2, operacion)
//     alert(resultado);
//     trueOfalse = false;
//   }

// }

// console.log(trueOfalse) // false


const iva = (a) => a * 1.21

const tasa = function (a) {
  if (a > 1000) {
    return a * 1.15
  } else {
    return a * 1.10
  }
}




let trueOfalse = true;

function calcularPrestamo() {
  let prestamo = Number(prompt('Ingresa el monto del prestamo'));

  while (trueOfalse) {
    if (prestamo === 0) {
      prestamo = Number(prompt('Ingresa el monto del prestamo'));
    } else {
      let resultado = iva(prestamo);
      calcularCuotas(resultado);
      trueOfalse = false;
    }
  }

}

function calcularCuotas(resultado) {
  let cuotas = Number(prompt('Ingresa la cantidad de cuotas\n3\n6\n12'));

  while (trueOfalse) {
    const tasaCalculada = tasa(resultado);
    let resultadoFinal = 0;
    switch (cuotas) {
      case 3:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
      case 6:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
      case 12:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de la cuota es de $${resultadoFinal}`);
        trueOfalse = false;
        break;
      default:
        cuotas = Number(prompt('Ingresa la cantidad de cuotas\n3\n6\n12'));
        break;
    }

  }
}

calcularPrestamo()