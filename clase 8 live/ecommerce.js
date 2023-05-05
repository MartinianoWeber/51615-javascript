const dbProductos = [
    {
        id: 1,
        name: "Remera",
        price: 1000,
        color: "rojo"
    },
    {
        id: 2,
        name: "Remera amarilla",
        price: 1000,
        color: "amarilla"
    },
    {
        id: 3,
        name: "Pantalon",
        price: 2000,
        color: "blanco"
    },
    {
        id: 4,
        name: "Zapatillas",
        price: 3000,
        color: "blanco"
    },
    {
        id: 5,
        name: "Zapatillas",
        price: 5000,
        color: "rojo"
    },
]


let productosArr = [];
let carritoArr = [];
let turnosArr = [];
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
        let selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto  \n 10. Bonus track buscar con MAP \n 11. Calcular nuevos precios \n 12. Agendar un turno \n 13. Salir");
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
                buscarConMap()
                break
            case "11":
                calculadoraDePrecios()
                break
            case "12":
                agendarTurno()
                break
            case "13":
                trueOFalse = false;
                break
            default:
                alert("No ingresaste una opción valida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto  \n 10. Bonus track buscar con MAP \n 11. Calcular nuevos precios \n 12. Agendar un turno \n 13. Salir");
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


// 03/05/2023

function calculadoraDePrecios() {
    let selectSection = prompt("¿Qué quieres hacer? \n 1. Pi * precio de producto \n 2. Euler * precio de producto \n 3. Maximo precio \n 4. Minimo precio \n 5. Cambiar valor \n 6. Encontrar la raiz cuadrada de un producto \n 7. Selecionar un producto random\n 8. Volver")
    switch (selectSection) {
        case "1":
            buscarProductoParaPi()
            break
        case "2":
            buscarProductoEuler()
            break
        case "3":
            buscarProductosMaximos()
            break
        case "4":
            buscarProductosMinimos()
            break
        case "5":
            cambiarValor()
            break
        case "6":
            raizCuadrada()
            break
        case "7":
            seleccionarProductoRandom()
            break
        case "8":
            initProgram()
            break
        default:
            alert("No ingresaste una opción valida")
            selectSection = prompt("¿Qué quieres hacer? \n 1. Pi * precio de producto \n 2. Euler * precio de producto \n 3. Maximo precio \n 4. Minimo precio \n 5. Cambiar valor \n 6. Encontrar la raiz cuadrada de un producto \n 7. Selecionar un producto random\n 8. Volver")
            break
    }
}

function buscarProductoParaPi() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })

    if (productoEncontrado) {
        alert(`el producto es ${productoEncontrado.name} y su precio es ${productoEncontrado.price}
            el resultado de pi por precio es ${Math.PI * productoEncontrado.price}
        `)
    } else {
        alert("No se encontro el producto");
    }
    calculadoraDePrecios()
}

function buscarProductoEuler() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })

    if (productoEncontrado) {
        alert(`el producto es ${productoEncontrado.name} y su precio es ${productoEncontrado.price}
            el resultado de Euler por precio es ${Math.E * productoEncontrado.price}
        `)
    } else {
        alert("No se encontro el producto");
    }
    calculadoraDePrecios()
}

function buscarProductosMaximos() {
    let productos = dbProductos.map((producto) => {
        return {
            name: producto.name,
            price: producto.price
        }
    })
    let precios = productos.map((producto) => producto.price)// [1000, 2000, 3000, 5000]
    const maximo = Math.max(...precios) // 1000, 2000, 3000, 5000
    let productoMaximo = productos.find((producto) => producto.price === maximo)
    alert(`El precio maximo de un producto en stock es ${maximo} y el producto es ${productoMaximo.name}`);

}

function buscarProductosMinimos() {
    let productos = dbProductos.map((producto) => {
        return {
            name: producto.name,
            price: producto.price
        }
    })
    let precios = productos.map((producto) => producto.price)// [1000,1000, 2000, 3000, 5000]
    const minimo = Math.min(...precios) // 1000,1000, 2000, 3000, 5000

    let productoMinimo = productos.filter((producto) => producto.price === minimo)

    productoMinimo.forEach((producto) => {
        alert(`El precio minimo de un producto en stock es ${minimo} y el producto es ${producto.name}`);
    })
}


function cambiarValor() {
    const productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        const nuevoPrecio = Number(prompt("Cual es el valor a aumentar el formato de la coma tiene que ser con punto?"));
        const tipoDeRedondeo = prompt("Quieres redondear el valor? \n 1. Podemos redondear hacia arriba \n 2. Podemos redondear hacia abajo \n 3. Podemos redondear hacia el entero mas cercano")
        switch (tipoDeRedondeo) {
            case "1":
                alert(`El nuevo precio es: ${Math.ceil(productoEncontrado.price + nuevoPrecio)}`);
                break
            case "2":
                alert(`El nuevo precio es: ${Math.floor(productoEncontrado.price + nuevoPrecio)}`);
                break
            case "3":
                alert(`El nuevo precio es: ${Math.round(productoEncontrado.price + nuevoPrecio)}`);
                break
            default:
                alert("No ingresaste una opción valida")
                break
        }
    } else {
        alert("No se encontro el producto");
    }
}

function raizCuadrada() {
    const productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert(`El precio del producto es ${productoEncontrado.price} y la raiz cuadrada es ${Math.sqrt(productoEncontrado.price)}`);
    } else {
        alert("No se encontro el producto");
    }
}

function seleccionarProductoRandom() {
    const numeroRandom = Math.floor(Math.random() * dbProductos.length)
    const productoRandom = dbProductos[numeroRandom]
    console.log(productoRandom);
}

function agendarTurno() {
    let selectSection = prompt("¿Qué quieres hacer? \n 1. Agendar turno \n 2. Ver turnos \n 3. Buscar turno \n 4. Buscar turno con locale \n 5. Volver")
    switch (selectSection) {
        case "1":
            agregarTurno()
            break
        case "2":
            verTurnos()
            break
        case "3":
            buscarTurno()
        case "4":
            valorSingular()
            break
        case "5":
            initProgram()
            break
        default:
            alert("No ingresaste una opción valida")
            selectSection = prompt("¿Qué quieres hacer? \n 1. Agendar turno \n 2. Ver turnos \n 3. Buscar turno \n 4. Buscar turno con locale \n 5. Volver")
            break
    }
}


function agregarTurno() {
    const nombre = prompt("Ingrese nombre de cliente");
    const apellido = prompt("Ingrese apellido de cliente");
    const edad = prompt("Ingrese edad de cliente");
    const dia = prompt("Ingrese dia de turno formato dd");
    const mes = prompt("Ingrese mes de turno formato mm");
    const anio = prompt("Ingrese año de turno formato aaaa");
    const hora = prompt("Ingrese hora de turno formato hh")
    const minutos = prompt("Ingrese minutos de turno formato mm");
    const fecha = new Date(anio, mes, dia, hora, minutos)
    const turno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        fecha: fecha
    }
    turnosArr.push(turno)
    alert("Turno agendado con exito");
    agendarTurno()
}

function verTurnos() {
    turnosArr.forEach((turno) => {
        alert(`
        Nombre: ${turno.nombre}
        Apellido: ${turno.apellido}
        Edad: ${turno.edad}
        Turno: ${turno.fecha}
        `);
    })
    agendarTurno()
}

function buscarTurno() {
    const nombre = prompt("Ingrese nombre de cliente");
    let turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombre
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Turno dia: ${changeDate(turnoEncontrado.fecha)}
        Turno hora: ${changeHour(turnoEncontrado.fecha)}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}

function changeHour(fecha) {
    const horas = fecha.getHours()
    const minutos = fecha.getMinutes()
    const segundos = fecha.getSeconds()
    const tiempo =
        horas.toString().padStart(2, "0") +
        ":" +
        minutos.toString().padStart(2, "0") +
        ":" +
        segundos.toString().padStart(2, "0");

    return tiempo
}

function changeDate(fecha) {
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const anio = fecha.getFullYear()
    const tiempo =
        dia.toString().padStart(2, "0") +
        "/" +
        mes.toString().padStart(2, "0") +
        "/" +
        anio.toString().padStart(2, "0");

    return tiempo
}


function valorSingular() {
    const nombre = prompt("Ingrese nombre de cliente");
    let turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombre
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Turno dia: ${turnoEncontrado.fecha.toLocaleDateString()} 
        Turno hora: ${turnoEncontrado.fecha.toLocaleTimeString()}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}

initProgram()

