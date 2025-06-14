function agregar() {
     document.getElementById("resultado").value=document.getElementById('num1').value+document.getElementById("resultado").value;
}

function agregarSuma() {
    document.getElementById("resultado").value=document.getElementById("suma").value+document.getElementById("resultado").value;
} 
function operacion() {
    let res = eval(document.getElementById("resultado").value);
    document.getElementById("resultado").value=res;
}
function borrar() {
    document.getElementById("resultado").value="";
}