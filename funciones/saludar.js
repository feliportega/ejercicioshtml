 function saludar() {
    console.log("este es el saludo");
 }

 
 function mostrarBienvenida() {
    alert("Bienvenido al sistema de registro");
 }
 


 function mostrarInstrucciones() {
    console.log("1. Completa todos los campos");
    console.log("2.Presiona el boton enviar");
    console.log("3.Revisa el resultado en la pantalla");
 }


  function mostrarNumero () {
   let numero = prompt("ingresa el numero");
   alert(numero);
  }


  function mostrarDiaSemana() {
    let dia = prompt("Ingrese un numero del 0 al 6 para mostrar el dia de la semana");
    switch (dia) {
        case '0':
            alert("domingo");
            break;
            case '1':
                alert("lunes");
                break;
                case '2':
                   alert("martes");
                   break
                   case '3':
                    alert("miercoles");
                    break;
                    case '4':
                    alert("jueves");
                    break;
                    case '5':
                    alert("viernes");
                    break;
                    case '6':
                    alert("sabado");
                    break;
            

    }
  }

  function diaSemana2 () {
    let dio=prompt("ingrese un numero del 0-6");
    if (dio==0){
        alert("domingo");
    }
    else if (dio==1){
        alert("lunes");
    }
    else if (dio==2){
        alert("martes");
    }
    else if (dio==3){
        alert("miercoles");
    }
    else if (dio==4){
        alert("jueves");
    }
    else if (dio==5){
        alert("viernes");
    }
    else if (dio==6){
        alert("sabado");
    }
    else {
        alert("numero no valido");
    }
  }

  function verificarParImpar() {
    let num = prompt("ingrese el numero para ver si es par o inpar");
    let resp = parseInt(num);
    if (resp % 2 === 0)/*if (resp % 2 != 0) o   if (resp != num)*/{
        alert("El numero es par");
    }
    else if (resp % 2 === 1) {
        alert("El numero es impar");
    }
    else {
        alert("entrada no  valida");                //
    }
  }


  function calcularIMC() {
    let peso = prompt("ingrese su peso en kg");
    let altura = prompt("Ingrese su alura en metros");     
    let weight = parseFloat(peso);
    let height = parseFloat(altura);

    if ((weight > 0) && (height > 0)) {
        let imc = weight/(height * height);
        imc = imc.toFixed(2);
        if (imc < 18.5) {
            alert("su IMC es "+ imc + " ,bajo peso");
        }
        else if (imc >= 18.5 && imc < 24.9) {
            alert("su IMC es "+imc+" , peso normal");
        }
        else if (imc >= 25 && imc < 29.9) {
            alert(" su IMC ES "+imc+" ,sobrepeso");
        }
        else {
            alert("su IMC es "+imc+" ,obesidad");
        }
    }
  }

  /*function calcularIMC2() {
    let p= prompt("ingrese su peso en kg");
    let al = prompt("Ingrese su alura en metros");     
    let wei = parseFloat(p);
    let hei = parseFloat(al);

    if (hei > 0) {
        let imc2 = wei/(hei)
    }
  }*/
  saludar();
  mostrarInstrucciones();
  mostrarBienvenida();
  mostrarNumero(); 
  mostrarDiaSemana();
  diaSemana2();
  verificarParImpar();
  calcularIMC();