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

// NUEVO DE 03 05 2023
let turnosArr = [];



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
        console.log(selectSection);
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


// NUEVO 03 05





function calculadoraDePrecios() {
    let selectSection = prompt("¿Qué quieres hacer? \n 1. Pi * precio de producto \n 2. Euler * precio de producto \n 3. Maximo precio \n 4. Minimo precio \n 5. Cambiar valor \n 6. Encontrar la raiz cuadrada de un producto \n 7. Selecionar un producto random\n 8. Volver")
    switch (selectSection) {
        case "1":
            buscarProductoParaPi()
            break
        case "2":
            buscarProductoParaEuler()
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
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    console.log(productoEncontrado);
    if (productoEncontrado) {
        alert(`
        Nombre: ${productoEncontrado.name}
        Precio: ${productoEncontrado.price}
        Color: ${productoEncontrado.color}
        Pi: ${Math.PI} * precio $${productoEncontrado.price}: ${productoEncontrado.price * Math.PI}
        `);
    } else {
        alert("No se encontro el producto");
    }
    calculadoraDePrecios()
}

function buscarProductoParaEuler() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    console.log(productoEncontrado);
    if (productoEncontrado) {
        alert(`
        Nombre: ${productoEncontrado.name}
        Precio: ${productoEncontrado.price}
        Color: ${productoEncontrado.color}
        Euler: ${Math.E} * precio $${productoEncontrado.price}: ${productoEncontrado.price * Math.E}
        `);
    } else {
        alert("No se encontro el producto");
    }
    calculadoraDePrecios()
}

function buscarProductosMaximos() {
    let prueba = productosArr.map((producto) => producto.price)
    alert(`El precio maximo es: ${Math.max(...prueba)}`);
}

function buscarProductosMinimos() {
    let prueba = productosArr.map((producto) => producto.price)
    alert(`El precio minimo es: ${Math.min(...prueba)}`);
}

function cambiarValor() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        let nuevoPrecio = Number(prompt("Cual es el valor a aumentar?"));
        let tipoDeRedondeo = prompt("Quieres redondear el valor? \n 1. Podemos redondear hacia arriba \n 2. Podemos redondear hacia abajo \n 3. Podemos redondear hacia el entero mas cercano")
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
    calculadoraDePrecios()
}


function raizCuadrada() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert(`La raiz cuadrada del precio es: ${Math.sqrt(productoEncontrado.price)}`);
    } else {
        alert("No se encontro el producto");
    }
    calculadoraDePrecios()
}

function seleccionarProductoRandom() {
    let productoRandom = productosArr[Math.floor(Math.random() * productosArr.length)];
    alert(`
    Nombre: ${productoRandom.name}
    Precio: ${productoRandom.price}
    Color: ${productoRandom.color}
    `);
    calculadoraDePrecios()
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
    let nombre = prompt("Ingrese nombre de cliente");
    let apellido = prompt("Ingrese apellido de cliente");
    let edad = prompt("Ingrese edad de cliente");
    let dia = prompt("Ingrese dia de turno formato dd");
    let mes = prompt("Ingrese mes de turno formato mm");
    let anio = prompt("Ingrese año de turno formato aaaa");

    let turno = new Date(anio, mes, dia);
    turnosArr.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        turno: turno
    });
    alert("Turno agendado con exito");
    agendarTurno()
}

function verTurnos() {
    turnosArr.forEach((turno) => {
        alert(`
        Nombre: ${turno.nombre}
        Apellido: ${turno.apellido}
        Edad: ${turno.edad}
        Turno: ${turno.turno}
        `);
    })
    agendarTurno()
}


function buscarTurno() {
    let nombreABuscar = prompt("Que nombre quieres buscar?");
    let turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombreABuscar;
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Turno dia: ${changeDate(turnoEncontrado.turno)}
        Turno hora: ${changeHour(turnoEncontrado.turno)}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}

function changeHour(fecha) {
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    console.log(horas, minutos, segundos);
    const tiempo =
        horas.toString().padStart(2, "0") +
        ":" +
        minutos.toString().padStart(2, "0") +
        ":" +
        segundos.toString().padStart(2, "0");
    return tiempo;
}

function changeDate(fecha) {
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth()).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    return fechaFormateada;
}

function valorSingular() {
    let nombreABuscar = prompt("Que nombre quieres buscar?");
    let turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombreABuscar;
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Turno dia: ${turnoEncontrado.turno.toLocaleDateString()}
        Turno hora: ${turnoEncontrado.turno.toLocaleTimeString()}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}



initProgram()
