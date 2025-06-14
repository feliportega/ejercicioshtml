function calcularDescuento(precio, porcentaje) {  
    let descuento = (precio*(porcentaje/100));
    let precioFinal = precio - descuento;
    return precioFinal;
}
let precio = parseInt(prompt("Ingrese el precio del producto"));
let porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
let resultado = calcularDescuento(precio, porcentaje);
console.log(resultado);
alert("El nuevo precio es; "+ resultado);

function esDescuentoAlto(porcentaje) {
    if (porcentaje >= 30){
        return true;
    }
    if(porcentaje <30){
        return false;
    }
}
let d = esDescuentoAlto(porcentaje);
alert("el porcentaje es alto? "+d);


function verificarDescuento(precio, porcentaje) {
    let precioFinal = calcularDescuento(precio, porcentaje);
    let alto = esDescuentoAlto(porcentaje);
    if (alto) {
        alert("El descuento es alto, el nuevo precio es; "+precioFinal);
    }
    else {
        alert("El descuento no es alto, el nuevo precio es: "+precioFinal);
    }
} 
verificarDescuento(precio, porcentaje); 


 