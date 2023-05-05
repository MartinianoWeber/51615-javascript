let perritosArr = []
let gatitosArr = []
let trueOFalse = true

class Animal {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
    }
}


function initProgram() {
    let selectSection = prompt("¿Qué quieres hacer? \n 1. Añadir un gato \n 2. Añadir un gato unshift  \n 3. Añadir un perro push \n 4. Ver gatos \n 5. Ver perros \n 6. Adoptar al ultimo perro \n 7. Adoptar al ultimo gato \n 8. Adoptar al primer perro \n 9. Adoptar al primer gato \n 10. buscar un gato \n 11. Ver nombres con - \n 12. Buscar un perro \n 13. Nombres al reves \n 14. Ver gatos y perros \n 15. Adoptar perro especifico \n 16. Adoptar perro especifico slice \n 17. Salir");

    while (trueOFalse) {
        switch (selectSection) {
            case "1":
                agregarGatoPush()
                break;
            case "2":
                agregarGatoUnshift()
                break;
            case "3":
                agregarPerroPush()
                break
            case "6":
                adoptarUltimoPerrito()
                break
            case "7":
                adoptarUltimoGatito()
                break
            case "8":
                adoptarPrimerPerro()
                break
            case "9":
                adoptarPrimerGato()
                break
            case "10":
                buscarUnGato()
                break
            case "11":
                verNombresConGuion()
                break
            case "12":
                buscarUnPerro()
                break
            case "13":
                nombresAlReves()
                break
            case "14":
                verGatosYPerros()
                break
            case "15":
                adoptarPerroEspecifico()
                break
            case "16":
                adoptarPerroEspecificoSlice()
                break
            case "17":
                trueOFalse = false
                break;
        }
    }


}


function agregarGatoPush() {
    let name = prompt("Introduce el nombre del gato");
    let age = Number(prompt("Introduce la edad del gato"));
    let color = prompt("Introduce el color del gato");
    while (trueOFalse) {
        if (name == "" || age == 0 || isNaN(age) || color == "") {
            alert("No has introducido un valor valido")
            name = prompt("Introduce el nombre del gato");
            age = Number(prompt("Introduce la edad del gato"));
            color = prompt("Introduce el color del gato");
        } else {
            let gato = new Animal(name, age, color)
            gatitosArr.push(gato)
            console.log(gatitosArr)
            initProgram()
        }
    }
}

function agregarPerroPush() {
    let name = prompt("Introduce el nombre del perro");
    let age = Number(prompt("Introduce la edad del perro"));
    let color = prompt("Introduce el color del perro");
    while (trueOFalse) {
        if (name == "" || age == 0 || isNaN(age) || color == "") {
            alert("No has introducido un valor valido")
            name = prompt("Introduce el nombre del perro");
            age = Number(prompt("Introduce la edad del perro"));
            color = prompt("Introduce el color del perro");
        } else {
            const perro = new Animal(name, age, color)
            perritosArr.push(perro)
            console.log(perritosArr)
            initProgram()
        }
    }
}

function agregarGatoUnshift() {
    let name = prompt("Introduce el nombre del gato");
    let age = Number(prompt("Introduce la edad del gato"));
    let color = prompt("Introduce el color del gato");
    while (trueOFalse) {
        if (name == "" || age == 0 || isNaN(age) || color == "") {
            alert("No has introducido un valor valido")
            name = prompt("Introduce el nombre del gato");
            age = Number(prompt("Introduce la edad del gato"));
            color = prompt("Introduce el color del gato");
        } else {
            let gato = new Animal(name, age, color)
            gatitosArr.unshift(gato)
            console.log(gatitosArr)
            initProgram()
        }
    }
}

function adoptarUltimoPerrito() {
    const perro = perritosArr.length - 1 // 2
    if (perritosArr.length == 0) {
        alert("No hay perros para adoptar")
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[perro].name}`)
        perritosArr.pop()
        initProgram()
    }

}

function adoptarUltimoGatito() {
    const gato = gatitosArr.length - 1 // 2
    if (gatitosArr.length == 0) {
        alert("No hay gatos para adoptar")
        initProgram()
    } else {
        alert(`Has adoptado a ${gatitosArr[gato].name}`)
        gatitosArr.pop()
        initProgram()
    }

}

function adoptarPrimerPerro() {
    const perro = 0
    if (perritosArr.length == 0) {
        alert("No hay perros para adoptar")
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[perro].name}`)
        perritosArr.shift()
        console.log(perritosArr)
        initProgram()
    }
}

function adoptarPrimerGato() {
    const gato = 0
    if (gatitosArr.length == 0) {
        alert("No hay gatos para adoptar")
        initProgram()
    } else {
        alert(`Has adoptado a ${gatitosArr[gato].name}`)
        gatitosArr.shift()
        console.log(gatitosArr)
        initProgram()
    }
}

function buscarUnGato() {
    let nombre = prompt("Introduce el nombre del gato que quieres buscar");
    const gatoEncontrado = gatitosArr.map((gato) => gato.name).indexOf(nombre)
    if (gatoEncontrado == -1) {
        alert("No hay gatos con ese nombre")
        initProgram()
    } else {
        alert(`El gato ${gatitosArr[gatoEncontrado].name} esta en la posicion ${gatoEncontrado}`)
        initProgram()
    }
    console.log(gatoEncontrado)
    initProgram()
}

function buscarUnPerro() {
    let nombre = prompt("Introduce el nombre del perro que quieres buscar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).includes(nombre)
    if (perroEncontrado == false) {
        alert("No hay perros con ese nombre")
        initProgram()
    } else {
        alert("Si se puede encontrar el perro en nuestra base pero por politicas de seguridad no podemos mostrarlo");
        initProgram()
    }
}


function adoptarPerroEspecifico() {
    let nombre = prompt("Introduce el nombre del perspectiveOrigin:  que quieres buscar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).indexOf(nombre)
    if (perroEncontrado == -1) {
        alert("No hay gatos con ese nombre")
        initProgram()
    } else {
        alert(`El perro ${perritosArr[perroEncontrado].name} esta en la posicion ${perroEncontrado}`)
        perritosArr.splice(perroEncontrado, 1)
        initProgram()
    }
    console.log(perroEncontrado)
    initProgram()
}

function adoptarPerroEspecificoSlice() {
    let nombre = prompt("Introduce el nombre del perspectiveOrigin:  que quieres buscar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).indexOf(nombre)
    if (perroEncontrado == -1) {
        alert("No hay gatos con ese nombre")
        initProgram()
    } else {
        alert(`El perro ${perritosArr[perroEncontrado].name} esta en la posicion ${perroEncontrado}`)
        let desdeSlice = perritosArr.slice(perroEncontrado, 1)
        initProgram()
    }
    initProgram()
}


function verNombresConGuion() {
    let nombres = perritosArr.map((perro) => perro.name).join("\n")
    alert(nombres)
    initProgram()
}

function verGatosYPerros() {
    let gatosYPerros = perritosArr.concat(gatitosArr)
    console.log(gatosYPerros)
    gatosYPerros.forEach((animales) => {
        alert(`Nombre: ${animales.name} Edad: ${animales.age} Color: ${animales.color}`)
    })
    initProgram()
}

function nombresAlReves() {
    perritosArr.reverse()
    console.log(perritosArr)
    initProgram()
}

function forOf() {
    for (const perrito of perritosArr) {
        console.log(perrito.name);
        console.log(perrito.age);
    }

}

initProgram()