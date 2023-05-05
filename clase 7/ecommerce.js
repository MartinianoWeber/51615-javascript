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


let productosArr = [];
let carritoArr = [];
let trueOFalse = true;

class Producto {
    constructor(id, name, price, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color
    }
    iva() {
        return this.price * 0.21;
    }

}



function pushProductos() {
    for (const element of dbProductos) {
        productosArr.push(new Producto(element.id, element.name, element.price, element.color))
    }
}
pushProductos()

function initProgram() {
    while (trueOFalse) {
        let selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. Bonus track buscar con MAP");
        switch (selectSection) {
            case "1":
                showProductosFor()
                break
            case "2":
                showProductosForReturnFunction()
                break
            case "3":
                alert(`El promedio de valor por prenda en stock es de ${calcularPricePromedio(productosArr)}`)
                break
            case "4":
                verProductosForEach()
                break
            case "5":
                atoZ()
                break
            case "6":
                buscarProducto()
                break
            case "7":
                buscarColor()
                break
            case "8":
                buscarEnDB()
                break
            case "9":
                comprarProducto()
                break
            case "10":
                trueOFalse = false;
                break
            case "11":
                buscarProductoConMap()
                break
            default:
                alert("No ingresaste una opción valida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. Bonus track buscar con MAP");
                break
        }
    }

}

// FUNCIONES POR PARAMETROS
function showProductosFor() {
    showProductosForFunction(productosArr, alert)
    alert("Fin de la lista");
    initProgram()
}
// RETONAR UNA FUNCION

function showProductosForReturnFunction() {
    showProductosForReturn(productosArr)(alert)
    alert("Fin de la lista");
    initProgram()
}

function showProductosForReturn(arr) {
    return (fn) => {
        for (const el of arr) {
            fn(el.name + " " + el.price + " " + el.color)
        }
    }
}

function showProductosForFunction(arr, fn) {
    for (const el of arr) {
        fn(el.name + " " + el.price + " " + el.color)
    }
}

function porCadaUno(arreglo, funcion) {
    for (let i = 0; i < arreglo.length; i++) {
        funcion(arreglo[i]); // Llama a la funcion que se le pasa por parametro
    }
    initProgram()
}

function calcularPricePromedio(producArr) {
    let montoTotal = 0;
    let cantidadDeProductos = producArr.length;
    // EMPIEZA EL METODO PORCADAUNO
    porCadaUno(producArr, (producto) => {
        montoTotal += producto.price; // Obtiene la cantidad total del valor de los productos
    });
    // TERMINA Y RETORNA EL METODO PORCADAUNO
    return montoTotal / cantidadDeProductos;
}


function verProductosForEach() {
    productosArr.forEach((producto) => {
        alert(producto.name + " " + producto.price + " " + producto.color);
    });
}

function atoZ() {
    productosArr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
    });
    console.log(productosArr);
    initProgram()
}

function buscarProducto() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    console.log(productoEncontrado);
    if (productoEncontrado) {
        alert(productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color);
    } else {
        alert("No se encontro el producto");
    }
    initProgram()
}

function buscarColor() {
    let colorABuscar = prompt("Que color quieres buscar?");
    let colorEncontrado = productosArr.filter((producto) => {
        return producto.color === colorABuscar;
    })
    if (colorEncontrado) {
        colorEncontrado.forEach((producto) => {
            alert(producto.name + " " + producto.price + " " + producto.color);
        });
    } else {
        alert("No se encontro el producto");
    }
    initProgram()
}

function buscarEnDB() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.some((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
    } else {
        alert("No se encontro el producto");
    }

}

function comprarProducto() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.some((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
        addToCart(productoABuscar)
    } else {
        alert("No se encontro el producto");
    }
}


function addToCart(productoABuscar) {
    let productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
        carritoArr.push(productoEncontrado)
        let confirmar = prompt("Quieres comprar otro producto? (si/no)")
        if (confirmar === "si") {
            comprarProducto()
        } else {
            sumarPrecioTotal()
            eliminarProductosComprados()
        }
    } else {
        alert("No se encontro el producto");
    }
}

function sumarPrecioTotal() {
    let precioTotal = carritoArr.reduce((acumulador, producto) => {
        return acumulador + producto.price
    }
        , 0)
    console.log(precioTotal);

}

function eliminarProductosComprados() {
    carritoArr.forEach((producto) => {
        let index = productosArr.indexOf(producto)
        productosArr.splice(index, 1)
    })
    console.log(productosArr);
    initProgram()
}

function buscarProductoConMap() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = productosArr.map((producto) => producto.name).indexOf(productoABuscar);
    if (productoEncontrado === -1) {
        alert("No se ha encontrado el producto");
        initProgram()
    } else {
        alert(`Nombre: ${productosArr[productoEncontrado].name} \n Precio: ${productosArr[productoEncontrado].price} \n Color: ${productosArr[productoEncontrado].color}`);
        initProgram()
    }
}


initProgram()

console.log(productosArr);

