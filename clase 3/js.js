
// TABLA DE MULTIPLICACION
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// let numero = Number(prompt("Digite un número: "))
// TABLA DE MULTIPLICACION PERSONALIZADA
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} * ${i} = ${numero * i}`)
// }

// TABLA DE MULTIPLICACION CON BREAK Y CONTINUE
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         if (i * j == 10) {
//             console.log("Se ha encontrado el resultado 10")
//             break
//         }
//         // if (i * j == 8) {
//         //     continue
//         // }
//         console.log(`${i} * ${j} = ${i * j}`)


//     }
// }

//  EJEMPLO BREAK
// for (let i = 1; i <= 10; i++) {
//     if (i == 6) {
//         break
//     }
//     console.log(i)
// }



// let nombre = prompt("Ingresa tu nombre y tu apellido: ")
// while (nombre == '') {
//     console.log(nombre)
//     nombre = prompt("Ingresa tu nombre y tu apellido: ")
// }

// do {
//     console.log(nombre)
//     nombre = prompt("Ingresa tu nombre y tu apellido: ")
//     console.log(nombre)
// } while (nombre == '')

let producto = parseInt(prompt("Bienvenidos a Ecommerce:\n 1- Mouse \n 2- Teclado \n 3- Auriculares \n 4- Parlantes \n 5- Monitor \n 6- CPU \n 7- ESC para salir \n Ingrese el número del producto que desea comprar: "))

while (producto != 7) {
    switch (producto) {
        case 1:
            console.log("El mouse cuesta $1000")
            break
        case 2:
            console.log("El teclado cuesta $2000")
            break
        case 3:
            console.log("Los auriculares cuestan $3000")
            break
        case 4:
            console.log("Los parlantes cuestan $4000")
            break
        case 5:
            console.log("El monitor cuesta $5000")
            break
        case 6:
            console.log("La CPU cuesta $6000")
            break
        default:
            alert("No tenemos ese producto")
            break
    }
    producto = parseInt(prompt("Bienvenidos a Ecommerce:\n 1- Mouse \n 2- Teclado \n 3- Auriculares \n 4- Parlantes \n 5- Monitor \n 6- CPU \n 7- ESC para salir \n Ingrese el número del producto que desea comprar: "))
}