let nombre = prompt("Ingrese su nombre:");


if (nombre != "") {
    let anioNacimiento = Number(prompt("Ingrese su año de nacimiento:"));
    if ((anioNacimiento >= 1923 && anioNacimiento <= 2005)) {
        alert("Sos mayor de edad")
    } else if ((anioNacimiento >= 2006 && anioNacimiento <= 2023)){
        alert("sos menor de edad")
    } else {
        alert("No ingresaste un número o el número es irracional")
    }
} else {
    alert("No ingresaste ningun nombre")
    let nombre = prompt("Ingrese su nombre:");
}
