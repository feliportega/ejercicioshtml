/*function capturar() {                                         /* let n = document.getElementById('name')    */
   /* let n = document.getElementById('nombre');                  /*alert(n) */
    /*let dato = n.value;
    alert(dato);
}*/

function capturar() {
    let a = document.getElementById('nombre').value;
    let b = document.getElementById('apellido').value;
    document.getElementById("resultado").value= a
    alert(a+b);
}