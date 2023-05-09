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
const agregando = document.getElementById("agregando");
const pEliminar = document.querySelectorAll("p");
console.log(pEliminar);
// let productosArr = [];
// let trueOFalse = true;




// class Producto {
//     constructor(id, name, price, color) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.color = color
//     }
//     iva() {
//         return this.price * 0.21;
//     }

// }



// function pushProductos() {
//     for (const element of dbProductos) {
//         productosArr.push(new Producto(element.id, element.name, element.price, element.color))
//     }
// }
// pushProductos()

// function initProgram() {
//     while (trueOFalse) {
//         let selectSection = prompt("¿Qué quieres hacer? \n 1. Nodos \n 2.Crear y eliminar nodos\n 13. Salir");
//         console.log(selectSection);
//         switch (selectSection) {
//             case "1":
//                 // nodos()
//                 break;
//             case "2":
//                 crearNodos()
//                 break

//             case "13":
//                 trueOFalse = false;
//                 break
//             default:
//                 alert("No ingresaste una opción valida")
//                 selectSection = prompt("¿Qué quieres hacer? \n 1. Nodos \n 2.Crear y eliminar nodos\n 13. Salir");
//                 break
//         }
//     }

// }


// function nodos() {
//     let selection = prompt("¿Qué quieres hacer? \n 1. getElement por id \n 2. getElement por clase \n 3. getElement por etiqueta \n 5. Iterar varias clases \n 6. Iterar varias etiquetas \n 7. Salir");

//     switch (selection) {
//         case "1":
//             const id = prompt("Ingrese el id del elemento que desea seleccionar")
//             const elementById = document.getElementById(id) // getElementById('llamadoId')
//             let modificar = prompt("¿Quieres modificar el texto? \n 1. Si \n 2. No \n 3 Quiero cambiar la clase \n 3 Quiero agregar un h1");
//             if (modificar == 1) {
//                 const texto = prompt("Ingrese el texto que desea agregar")
//                 elementById.innerText = texto
//             } else if (modificar == 2) {
//                 nodos()
//             } else if (modificar == 3) {
//                 const clase = prompt("Ingrese la clase que desea quitar")
//                 const claseAgregar = prompt("Ingrese la clase que desea agregar")
//                 elementById.classList.remove(clase)
//                 elementById.classList.add(claseAgregar)
//                 console.log(elementById.classList)
//             } else if (modificar == 4) {
//                 elementById.innerHTML = "<h1 class=hola >hola</h1>"
//             }
//             break;
//         case "2":
//             const clase = prompt("Ingrese la clase del elemento que desea seleccionar")
//             const elementByClass = document.getElementsByClassName(clase) // getElementByClassName('llamadoClass')
//             for (const element of elementByClass) {
//                 console.log(element);
//             }
//             break;
//         case "3":
//             const etiqueta = prompt("Ingrese la etiqueta del elemento que desea seleccionar")
//             const elementByTag = document.getElementsByTagName(etiqueta) // getElementByTagName('div')
//             for (const element of elementByTag) {
//                 console.log(element);
//             }
//             break;

//         case "5":

//             break;
//         case "6":

//             break;
//         case "7":
//             initProgram()
//             break;
//         default:
//             alert("No ingresaste una opción valida")
//             selection = prompt("¿Qué quieres hacer? \n 1. getElement por id \n 2. getElement por clase \n 3. getElement por etiqueta \n 5. Iterar varias clases \n 6. Iterar varias etiquetas \n 7. Salir");
//             break
//     }
// }

// function crearNodos() {
//     let selection = prompt("Quieres crear o eliminar nodos? \n 1. Crear \n 2. Eliminar \n 3. Salir");
//     switch (selection) {
//         case "1":
//             crearElNodo()
//             break;
//         case "2":
//             elimarNodo()
//             break;
//         case "3":
//             // iteracionDesdeElementos()
//             iteracionDesdeTemplate()
//             break;
//         case "4":
//             initProgram()
//             break;
//     }

// }

// function crearElNodo() {
//     let crear = prompt("¿Qué etiqueta quieres crear? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
//     switch (crear) {
//         case "1":
//             const h1 = document.createElement("h1")
//             const texto = prompt("Ingrese el texto que desea agregar")
//             h1.innerText = texto
//             h1.className = "hola"
//             agregando.appendChild(h1)
//             break;
//         case "2":
//             const p = document.createElement("p")
//             const textoP = prompt("Ingrese el texto que desea agregar")
//             p.innerText = textoP
//             document.body.appendChild(p) //beforeend Ultimo // afterend Despues // beforebegin Antes // afterbegin Primero
//             break;
//         case "3":
//             const div = document.createElement("div")
//             const textoDiv = prompt("Ingrese el texto que desea agregar")
//             div.innerText = textoDiv
//             agregando.appendChild(div)
//             break;
//         case "4":
//             crearNodos()
//             break;
//         default:
//             alert("No ingresaste una opción valida")
//             crear = prompt("¿Qué etiqueta quieres crear? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
//             break
//     }
// }

// function elimarNodo() {
//     let eliminar = prompt("¿Qué etiqueta quieres eliminar? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
//     switch (eliminar) {
//         case "1":
//             let h1 = document.getElementById("h1Eliminar");
//             h1.remove();
//             break;
//         case "2":
//             let p = document.getElementsByClassName("pEliminar");
//             for (let i = 0; i < p.length + 1; i++) {
//                 p[i].remove();
//                 console.log(p[i]);
//             }
//             break;
//         case "3":
//             let div = document.getElementsByTagName("div");
//             div[0].remove();
//             break;
//         case "4":
//             crearNodos()
//             break;
//         default:
//             alert("No ingresaste una opción valida")
//             eliminar = prompt("¿Qué etiqueta quieres eliminar? \n 1. h1 \n 2. p \n 3. div \n 4. Salir");
//             break
//     }
// }

// function iteracionDesdeElementos() {
//     productosArr.forEach((element) => {
//         let p = document.createElement("p")
//         let boton = document.createElement("button")
//         p.innerText = element.name
//         boton.innerText = "Agregar al carrito"
//         document.body.appendChild(p)
//         document.body.appendChild(boton)
//     })
// }

// function iteracionDesdeTemplate() {
//     let template
//     productosArr.forEach((element) => {
//         template += `
//             <p>${element.name}</p>
//             <button>Agregar al carrito</button>
//         `
//     })
//     document.body.innerHTML = template

// }

// initProgram()