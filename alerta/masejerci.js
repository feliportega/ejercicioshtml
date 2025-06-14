function calcularPromedio(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    let promedio = suma / 3;
    return promedio;
}
let a = parseFloat(prompt("ingrese el primer numero"));
let b = parseFloat(prompt("ingrese el segundo numero"));
let c = parseFloat(prompt("ingrese el tercer numero"));
let resultado = calcularPromedio(a, b, c);
console.log(resultado);
alert("promedio : "+resultado);


function esAprobado(promedio) {
    if (promedio >= 3) {
        return true;
    }
    if (promedio < 3) {
        return false;
    }
}
let p = esAprobado (resultado);
alert("¿esta aprobado? "+p);