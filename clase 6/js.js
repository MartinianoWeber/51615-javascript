let perritosArr = [];
let gatitosArr = [];
let trueOFalse = true;

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}



function initProgram() {
    let selectSection = prompt("¿Qué quieres hacer? \n 1. Añadir un gato \n 2. Añadir un perro \n 3. Ver gatos \n 4. Ver perros \n 5. Adoptar al ultimo perro \n 6. Adoptar al ultimo gato \n 7. Adoptar al primer perro \n 8. Adoptar al primer gato \n 9. buscar un gato \n 10. Ver nombres con - \n 11. Buscar un perro \n 12. Nombres al reves \n 13. Ver gatos y perros \n 14. Adoptar perro especifico \n 15. Adoptar perro especifico slice \n 16. Salir");
    while (trueOFalse) {
        switch (selectSection) {
            case "1":
                addCat();
                break;
            case "2":
                addDog();
                break;
            case "3":
                showCats();
                break;
            case "4":
                showDogs();
                break;
            case '5':
                adoptarAlUltimoPerro();
                break;
            case '6':
                adoptarAlUltimoGato();
                break;
            case '7':
                adoptarAlPrimerPerro();
                break;
            case '8':
                adoptarAlPrimerGato();
                break;
            case "9":
                buscarUnGato();
                break;
            case '10':
                verNombresGatos()
                break;
            case '11':
                buscarUnPerro()
                break;
            case "12":
                verNombresPerrosAlReves();
                break;
            case '13':
                verPerrosYGatos();
                break;
            case "14":
                adoptarCualquierPerroSplice();
                break;
            case "15":
                adoptarCualquierPerroSlice()
                break;
            case "16":
                alert("Hasta la proxima");
                trueOFalse = false;
                break;
            default:
                alert("No has introducido un número válido");
                selectSection = prompt("¿Qué quieres hacer? \n 1. Añadir un gato \n 2. Añadir un perro \n 3. Ver gatos \n 4. Ver perros \n 5. Adoptar al ultimo perro \n 6. Adoptar al ultimo gato \n 7. Adoptar al primer perro \n 8. Adoptar al primer gato \n 9. buscar un gato \n 10. Ver nombres con - \n 11. Buscar un perro \n 12. Nombres al reves \n 13. Ver gatos y perros \n 14. Adoptar perro especifico \n 15. Adoptar perro especifico slice \n 16. Salir");
                break;
        }
    }
}

function addCat() {
    let name = prompt("Introduce el nombre del gato");
    let age = Number(prompt("Introduce la edad del gato"));
    let color = prompt("Introduce el color del gato");
    while (trueOFalse) {
        if (name == "" || age === 0 || isNaN(age) || color == "") {
            alert("No has introducido los datos correctamente");
            name = prompt("Introduce el nombre del gato");
            age = Number(prompt("Introduce la edad del gato"));
            color = prompt("Introduce el color del gato");
        } else {
            let cat = new Animal(name, age, color);
            gatitosArr.push(cat);
            initProgram()
        }
    }
}

function addDog() {
    let name = prompt("Introduce el nombre del perro");
    let age = Number(prompt("Introduce la edad del perro"));
    let color = prompt("Introduce el color del perro");
    while (trueOFalse) {
        console.log(name, age, color);
        if (name == "" || age === 0 || isNaN(age) || color == "") {
            alert("No has introducido los datos correctamente");
            name = prompt("Introduce el nombre del perro");
            age = Number(prompt("Introduce la edad del perro"));
            color = prompt("Introduce el color del perro");
        } else {
            let dog = new Animal(name, age, color);
            perritosArr.push(dog);
            initProgram()
        }
    }
}

function showCats() {
    gatitosArr.forEach((cat) => {
        alert(`Nombre: ${cat.name} \n Edad: ${cat.age} \n Color: ${cat.color}`);
    });
    alert("Fin de la lista");
    initProgram()

}

function showDogs() {
    perritosArr.forEach((dog) => {
        alert(`Nombre: ${dog.name} \n Edad: ${dog.age} \n Color: ${dog.color}`);
    });
    alert("Fin de la lista");
    initProgram()
}

function adoptarAlUltimoPerro() {
    const ultimoPerro = perritosArr.length - 1

    if (perritosArr.length === 0) {
        alert("No hay perros disponibles")
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[ultimoPerro].name} \n Edad: ${perritosArr[ultimoPerro].age} \n Color: ${perritosArr[ultimoPerro].color}`);
        perritosArr.pop();
        initProgram()
    }

}

function adoptarAlUltimoGato() {
    const ultimoGato = gatitosArr.length - 1
    if (gatitosArr.length === 0) {
        alert("No hay gatos disponibles")
        initProgram()
    } else {
        alert(`Has adoptado a ${gatitosArr[ultimoGato].name} \n Edad: ${gatitosArr[ultimoGato].age} \n Color: ${gatitosArr[ultimoGato].color}`);
        gatitosArr.pop();
        initProgram()

    }
}

function adoptarAlPrimerPerro() {
    const primerPerro = 0
    if (perritosArr.length === 0) {
        alert("No hay perros disponibles")
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[primerPerro].name} \n Edad: ${perritosArr[primerPerro].age} \n Color: ${perritosArr[primerPerro].color}`);
        perritosArr.shift();
        initProgram()
    }
}

function adoptarAlPrimerGato() {
    const primerGato = 0
    if (gatitosArr.length === 0) {
        alert("No hay gatos disponibles")
        initProgram()
    } else {
        alert(`Has adoptado a ${gatitosArr[primerGato].name} \n Edad: ${gatitosArr[primerGato].age} \n Color: ${gatitosArr[primerGato].color}`);
        gatitosArr.shift();
        initProgram()

    }
}

function buscarUnGato() {
    const nombre = prompt("Introduce el nombre del gato que quieres buscar");
    const gatoEncontrado = gatitosArr.map((gato) => gato.name).indexOf(nombre);
    if (gatoEncontrado === -1) {
        alert("No se ha encontrado el gato");
        initProgram()
    } else {
        alert(`Nombre: ${gatitosArr[gatoEncontrado].name} \n Edad: ${gatitosArr[gatoEncontrado].age} \n Color: ${gatitosArr[gatoEncontrado].color}`);
        initProgram()
    }
}

function buscarUnPerro() {
    const nombre = prompt("Introduce el nombre del perro que quieres buscar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).includes(nombre);
    if (perroEncontrado === false) {
        alert("No se ha encontrado el perro");
        initProgram()
    } else {
        alert("Si se puede encontrar el perro en nuestra base pero por politicas de seguridad no podemos mostrarlo");
        initProgram()
    }
}

function verNombresGatos() {
    const nombresGatos = gatitosArr.map((gato) => gato.name).join(" - ");
    alert(nombresGatos);
    initProgram()
}

function verNombresPerrosAlReves() {
    const nombresPerros = perritosArr.map((perro) => perro.name).reverse().join(" - ");
    alert(nombresPerros);
    initProgram()
}

function verPerrosYGatos() {
    let gatosYperritos = perritosArr.concat(gatitosArr)
    console.log(gatosYperritos);

    gatosYperritos.forEach((animal) => {
        alert(`Nombre: ${animal.name} \n Edad: ${animal.age} \n Color: ${animal.color}`);
    });

    initProgram()
}

function adoptarCualquierPerroSplice() {
    const nombre = prompt("Introduce el nombre del perro que quieres adoptar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).indexOf(nombre);
    if (perroEncontrado === -1) {
        alert("No se ha encontrado el perro");
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[perroEncontrado].name} \n Edad: ${perritosArr[perroEncontrado].age} \n Color: ${perritosArr[perroEncontrado].color}`);
        perritosArr.splice(perroEncontrado, 1);
        initProgram()
    }
}

function adoptarCualquierPerroSlice() {
    const nombre = prompt("Introduce el nombre del perro que quieres adoptar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).indexOf(nombre);
    if (perroEncontrado === -1) {
        alert("No se ha encontrado el perro");
        initProgram()
    } else {
        alert(`Has adoptado a ${perritosArr[perroEncontrado].name} \n Edad: ${perritosArr[perroEncontrado].age} \n Color: ${perritosArr[perroEncontrado].color}`);
        perritosArr.slice(perroEncontrado, 1);
        initProgram()
    }
}
initProgram()