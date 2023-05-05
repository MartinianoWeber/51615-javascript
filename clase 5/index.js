// let ingreso1 = Number(prompt("Ingrese el primer valor"));
// let ingreso2 = Number(prompt("Ingrese el segundo valor"));
// let ingreso3 = Number(prompt("Ingrese el tercer valor"));

// if (ingreso1 > ingreso2 && ingreso1 > ingreso3){;
//     alert(`El número más grande es: ${ingreso1}`);
//     }else if(ingreso2 > ingreso1 && ingreso2 > ingreso3){;
//         alert(`El número más grande es: ${ingreso2}`)
//         }else{(ingreso3 > ingreso1 && ingreso3 > ingreso2)
//         alert(`El número más grande es: ${ingreso3}`)};


// class Persona {
//     constructor(obj) {
//         this.nombre = obj.nombre.toUpperCase()
//         this.apellido = obj.apellido.toUpperCase()
//         this.edad = parseInt(obj.edad)
//         this.edadEn10Anios
//     }
//     edad = () => this.edadEn10Anios = this.edad + 10
//     verPersona = () => {
//         return `Nombre: ${this.nombre}\n Apellido: ${this.apellido}\n Edad: ${this.edad}\n La edad en 10 años: ${this.edadEn10Anios}`
//     }
// }

let trueOfalse = true

// const nombre = prompt("Ingrese Nombre:");
// const apellido = prompt("Ingrese Apellido:");
// const edad = prompt("Ingese Edad: ");

let seleccionPlayera = Number(prompt("Ingrese el nombre de la playera: "));
let playera
nuevaPersona()

function nuevaPersona() {
    while (seleccionPlayera) {
        switch (seleccionPlayera) {
            case 1:
                playera = "playera1"
                break;
            case 2:
                playera = "playera2"
                break;
            case 3:
                playera = "playera3"
                break;
            case 4:
                playera = "playera4"
                break;
            default:
                alert("Invalido")
                break;
        }
        if (isNaN(seleccionPlayera)) {
            alert("Invalido")
            seleccionPlayera = Number(prompt("Ingrese el nombre de la playera: "));
        } else {
            trueOfalse = false
            console.log(playera)
        }

    }
}