function calcularEdad(añoNacimiento) {
    let edad = 2025 - añoNacimiento;
    return edad;
}
let a = parseInt(prompt("Ingrese su año de nacimiento"));
let resultado = calcularEdad(a);
console.log(resultado);
alert("Tu edad es : "+resultado);


function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    }
    if (edad < 18) {
        return false;
    }
}
let m = esMayorDeEdad(resultado);
alert("eres mayor edad? "+m);


/* function analizarEdad(añoNacimiento) {

} */

 function analizarEdad(añoNacimiento) {
    let edad = calcularEdad(añoNacimiento);
    let mayor = esMayorDeEdad(edad);

    if (mayor) {
        alert("Eres mayor de edad, tienes  "+ edad + " años.")
    }
    else {
            alert("Eres menor de edad "+edad +" años")
        }
} 
let e = parseInt(prompt("Ingrese su año de nacimiento"));
analizarEdad(e);