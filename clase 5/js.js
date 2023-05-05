// const martiniano = {
// nombre: 'Martiniano',
// edad: 20,
// trabaja: true,
// profesion: 'Programador'
// }

// console.log('Con punto', martiniano.profesion) // Accedemos con punto
// console.log('Con corchetes', martiniano['profesion']) // Accedemos con corchetes

//martiniano.profesion = 'Diseñador' // Modificamos con punto
// martiniano['profesion'] = 'Diseñador' // Modificamos con corchetes
// console.log('Con punto', martiniano.profesion) // Accedemos con punto
class Persona {
    constructor(obj) {
        this.nombre = obj.nombre.toUpperCase()
        this.apellido = obj.apellido.toUpperCase()
        this.edad = parseInt(obj.edad)
        this.edadEn10Anios
    }
    edad = () => this.edadEn10Anios = this.edad + 10
    verPersona = () => {
        return `Nombre: ${this.nombre}\n Apellido: ${this.apellido}\n Edad: ${this.edad}\n La edad en 10 años: ${this.edadEn10Anios}`
    }


}


let trueOfalse = true

const nombre = prompt('Ingresa el nombre del producto')
const cantidad = prompt('Ingresa la cantidad del producto')
const precio = prompt('Ingresa el precio del producto')

function ingresoProducto() {
    while (trueOfalse) {
        if (nombre === '' || cantidad === '' || precio === '') {
            alert('No puedes dejar campos vacios')
            nombre = prompt('Ingresa el nombre del producto')
            cantidad = prompt('Ingresa la cantidad del producto')
            precio = prompt('Ingresa el precio del producto')
            trueOfalse = true
        } else {
            let producto = new Productos({
                nombre: nombre,
                cantidad: cantidad,
                precio: precio
            })

            console.log(producto)
            producto.iva()
            producto.total()
            alert(producto.verProducto())
            trueOfalse = false
        }

    }

}

ingresoProducto()























// function Persona(obj) {
//     // CUALIDADES
//     this.nombre = obj.nombre
//     this.edad = obj.edad
//     this.trabaja = obj.trabaja
//     this.profesion = obj.profesion
//     // METODO
//     this.cambiarNombre = (nuevoNombre) => this.nombre = nuevoNombre
// }

// let martiniano = new Persona(
//     {
//         nombre: 'Martiniano',
//         edad: 20,
//         trabaja: true,
//         profesion: 'Programador'
//     }
// )

// let pedro = new Persona({
//     nombre: '',
//     edad: "20",
//     trabaja: true,
//     profesion: 'Programador'
// })

// console.log(martiniano)
// console.log(pedro)

// martiniano.cambiarNombre('Martiniano Perez')
// console.log(martiniano)

// const nombre = prompt('Ingresa tu nombre')
// const edad = prompt('Ingresa tu edad')
// const trabaja = prompt('Trabajas?')
// const profesion = prompt('Ingresa tu profesion')

// let persona = new Persona({
//     nombre: nombre,
//     edad: edad,
//     trabaja: trabaja,
//     profesion: profesion
// })

// console.log(pedro.cambiarNombre('Pedro Perez'))
// console.log('nombre' in pedro)
// console.log('mascota' in pedro)
// console.log(pedro)
// console.log(pedro.cambiarNombre('Pedro Perez'))

// console.log(pedro)

