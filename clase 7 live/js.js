const dbProductos = [
    {
        id: 1,
        name: "Remera",
        price: 1000,
        color: "rojo"
    },
    {
        id: 2,
        name: "Pantalon",
        price: 2000,
        color: "blanco"
    },
    {
        id: 3,
        name: "Zapatillas",
        price: 3000,
        color: "blanco"
    },
    {
        id: 4,
        name: "Zapatillas",
        price: 5000,
        color: "rojo"
    },
]

let productosArr = []
let carrito = [];
let trueOfalse = true


class Producto {
    constructor(id, name, price, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
    }
    iva() {
        return this.price * 0.21;
    }
}

function pushProductos() {
    for (const producto of dbProductos) {
        productosArr.push(new Producto(producto.id, producto.name, producto.price, producto.color))
    }
}

pushProductos()

function initProgram() {
    while (trueOfalse) {
        let selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. Bonus track buscar con MAP");
        switch (selectSection) {
            case "1":
                verProductosForOF()
                break
            case "2":

                break
            case "3":
                alert(`El promedio de valor por prenda en stock es de ${calcularElPromedio(productosArr)}`)
                break
            case "4":
                verProductosForEach()
                break
            case "5":
                aToZ()
                break
            case "6":
                buscarProductoFinD()
                break
            case "7":
                buscarColor()
                break
            case "8":
                buscarEnDB()
                break
            case "9":
                addToCart()
                break
            case "10":
                trueOfalse = false
                break
            case "11":
                buscarProductoConMap()
                break
            default:
                alert("No es una opción válida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. Bonus track buscar con MAP");
                break
        }
    }
}


function verProductosForOF() {
    auxiliarDeProductos(productosArr, alert)
    alert("Fin de la lista")
    initProgram()
}

function auxiliarDeProductos(arr, fn) {
    for (const producto of arr) {
        fn(producto.name + " " + producto.price + " " + producto.color)
    }

}

function calcularElPromedio(arrayProductos) {
    let montoTotal = 0
    let cantidadDeProductos = arrayProductos.length
    porCadaUno(arrayProductos, (producto) => {
        montoTotal += producto.price
    })
    return montoTotal / cantidadDeProductos
}

function porCadaUno(arrayProductos, funcion) {
    for (const producto of arrayProductos) {
        funcion(producto)
    }
}

function verProductosForEach() {
    productosArr.forEach((producto) => {
        alert(producto.name + " " + producto.price + " " + producto.color)
    })
}

function aToZ() {
    productosArr.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
    })
    console.log(productosArr)
    initProgram()
}


function buscarProductoFinD() {
    let productoABuscar = prompt("Ingrese el producto a buscar")
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name == productoABuscar
    })
    if (productoEncontrado) {
        alert("El producto existe")
        alert(productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color);
    } else {
        alert("El producto no existe")
    }
}

function buscarColor() {
    let colorABuscar = prompt("Ingrese el color a buscar")
    let productoEncontrado = productosArr.filter((producto) => {
        return producto.color == colorABuscar
    })
    if (productoEncontrado) {
        productoEncontrado.forEach((producto) => {
            alert(producto.name + " " + producto.price + " " + producto.color)
        })
    } else {
        alert("El producto no existe")
    }
}


function buscarEnDB() {
    let productoABuscar = prompt("Ingrese el producto a buscar")
    let productoEncontrado = dbProductos.some((producto) => {
        return producto.name == productoABuscar
    })
    if (productoEncontrado) {
        alert("El producto existe pero que no se puede mostrar por temas de seguridad")
    } else {
        alert("El producto no existe")
    }
}

function addToCart() {
    let productoABuscar = prompt("Ingrese el producto a buscar")
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name == productoABuscar
    })
    if (productoEncontrado) {
        alert(productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color);
        let confirmacion = prompt("¿Desea agregarlo al carrito? \n 1. Si \n 2. No")
        if (confirmacion == 1) {
            carrito.push(productoEncontrado)
            alert("Producto agregado al carrito")
            // PREGUNTAMOS
            seguirComprando()
        } else {
            alert("Producto no agregado al carrito")
            initProgram()
        }
    }
}


function seguirComprando() {
    const seguirComprando = prompt("¿Desea seguir comprando? \n 1. Si \n 2. No")
    if (seguirComprando == 1) {
        addToCart()
    } else {
        if (carrito.length > 0) {
            totalCarrito()
        } else {
            alert("No hay productos en el carrito")
            initProgram()
        }
    }
}

function totalCarrito() {
    let precioTotal = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.price
    }, 0)

    alert(`El precio total es de ${precioTotal}`)
}


function buscarProductoConMap() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = productosArr.map((producto) => producto.name).indexOf(productoABuscar)
    if (productoEncontrado != -1) {
        alert("El producto existe")
        alert(productosArr[productoEncontrado].name + " " + productosArr[productoEncontrado].price + " " + productosArr[productoEncontrado].color)
        initProgram()
    } else {
        alert("El producto no existe")
        initProgram()
    }
}

// function porCadaUnoConFor(arrayProductos, funcion) { 
//     for (let i = 0; i < arrayProductos.length; i++) {
//         funcion(arrayProductos[i])
//     }
//     initProgram()
// }


initProgram()