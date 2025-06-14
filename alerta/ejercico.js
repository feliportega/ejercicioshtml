function calcularAreaRectangulo(base, altura) {
    let area = base*altura;
    return area;
    console.log("El area es :" + a);
}
let a = prompt("Digite la altura");
let b = prompt("digite la base");
let resultado = calcularAreaRectangulo(b, a);
console.log(resultado);
alert(resultado);


function grande(area) {
    if (area > 100) {
        return true
    }
    if (area < 100) {
        return false
    }
}
let g = grande (resultado);
alert(g);