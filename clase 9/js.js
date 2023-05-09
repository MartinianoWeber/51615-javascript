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

const agregarCarro = document.querySelector(".addToCard");
let productosArr = [];
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
        let selectSection = prompt("¿Qué quieres hacer? \n 1. Nodos \n 2.Crear y eliminar nodos\n 13. Salir");
        console.log(selectSection);
        switch (selectSection) {
            case "1":
                nodos()
                break;
            case "2":
                crearNodos()
                break

            case "13":
                trueOFalse = false;
                break
            default:
                alert("No ingresaste una opción valida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. Nodos \n 2.Crear y eliminar nodos\n 13. Salir");
                break
        }
    }

}


function nodos() {
    let selection = prompt("¿Qué quieres hacer? \n 1. getElement por id \n 2. getElement por clase \n 3. getElement por etiqueta \n 5. Iterar varias clases \n 6. Iterar varias etiquetas \n 7. Salir");

    switch (selection) {
        case "1":
            let id = prompt("¿Qué id quieres buscar?");
            let idElement = document.getElementById(id);
            console.log(idElement);
            let modificar = prompt("¿Quieres modificar el texto? \n 1. Si \n 2. No \n 3 Quiero cambiar la clase");
            if (modificar == 1) {
                let texto = prompt("¿Qué texto quieres poner?");
                idElement.innerHTML = texto;
            } else if (modificar == 3) {
                let clase = prompt("¿Qué clase quieres poner?");
                idElement.className = clase;
            } else {
                nodos()
            }
            break;
        case "2":
            let clase = prompt("¿Qué clase quieres buscar?");
            let classElement = document.getElementsByClassName(clase);
            console.log(classElement);
            break;
        case "3":
            let etiqueta = prompt("¿Qué etiqueta quieres buscar?");
            let etiquetaElement = document.getElementsByTagName(etiqueta);
            console.log(etiquetaElement);
            break;

        case "5":
            let clase2 = prompt("¿Qué clase quieres buscar?");
            let classElement2 = document.getElementsByClassName(clase2);
            console.log(classElement2);
            for (const element of classElement2) {
                console.log(element);
            }
            break;
        case "6":
            let etiqueta2 = prompt("¿Qué etiqueta quieres buscar?");
            let etiquetaElement2 = document.getElementsByTagName(etiqueta2);
            for (const element of etiquetaElement2) {
                console.log(element);
            }
            break;
        case "7":
            initProgram()
            break;
        default:
            alert("No ingresaste una opción valida")
            selection = prompt("¿Qué quieres hacer? \n 1. getElement por id \n 2. getElement por clase \n 3. getElement por etiqueta \n 5. Iterar varias clases \n 6. Iterar varias etiquetas \n 7. Salir");
            break
    }
}

function crearNodos() {
    let selection = prompt("Quieres crear o eliminar nodos? \n 1. Crear \n 2. Eliminar \n 3. Salir");
    switch (selection) {
        case "1":
            crearElNodo()
            break;
        case "2":
            eliminarNodo()
            break;
        case "3":
            initProgram()
            break;
    }

}

function crearElNodo() {
    let crear = prompt("¿Qué etiqueta quieres crear? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
    switch (crear) {
        case "1":
            let h1 = document.createElement("h1");
            let texto = prompt("¿Qué texto quieres poner?");
            h1.innerHTML = texto;
            document.body.appendChild(h1);
            break;
        case "2":
            let p = document.createElement("p");
            let texto2 = prompt("¿Qué texto quieres poner?");
            p.innerHTML = texto2;
            document.body.appendChild(p);
            break;
        case "3":
            let div = document.createElement("div");
            let texto3 = prompt("¿Qué texto quieres poner?");
            div.innerHTML = texto3;
            document.body.appendChild(div);
            break;
        case "4":
            crearNodos()
            break;
        default:
            alert("No ingresaste una opción valida")
            crear = prompt("¿Qué etiqueta quieres crear? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
            break
    }
}

function eliminarNodo() {
    let eliminar = prompt("¿Qué etiqueta quieres eliminar? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
    switch (eliminar) {
        case "1":
            let h1 = document.getElementsByTagName("h1");
            h1[0].remove();
            break;
        case "2":
            let p = document.getElementsByTagName("p");
            p[0].remove();
            break;
        case "3":
            let div = document.getElementsByTagName("div");
            div[0].remove();
            break;
        case "4":
            crearNodos()
            break;
        default:
            alert("No ingresaste una opción valida")
            eliminar = prompt("¿Qué etiqueta quieres eliminar? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
            break
    }
}

initProgram()