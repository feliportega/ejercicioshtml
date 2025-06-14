function esMayorDeEdad() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18) {
        alert("true")
        
    }
    else if (edad < 18) {
        alert("false")
    }
}


function cacularDescuentoo (precio, porcentaje) {
let descuento = precio * porcentaje/100;
let preciofinal = precio-descuento;
alert("precio final: "+preciofinal);
}

let precio = parseFloat(prompt("ingrese el precio del produco"));
let porcentaje= parseFloat(prompt("ingrese el porcentaje"));





cacularDescuentoo(precio, porcentaje);
esMayorDeEdad();
