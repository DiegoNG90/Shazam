console.log("Shazam conectado");

const $botonEmpezar = document.querySelector('#btn-empezar');
const $botonReiniciar = document.querySelector('#reiniciar');


let adivinanza = "";
let mayor= "";
let maximo = 100;
let minimo = 0;
let mitad = Math.round((maximo+minimo)/2);

function adivinando(){
    while(adivinanza !== true){
        adivinanza = confirm(`Su numero es ${mitad}?`);
        if(adivinanza){
            alert(`Bien! He adivinado, tu número secreto es ${mitad}`)
        }else if (!adivinanza) {
            mayor = confirm(`Su numero es mayor a ${mitad}?`);
            if(mayor === true){
                minimo = mitad;
                mitad = Math.round((maximo+minimo)/2);
            }else if (!mayor) {
                maximo = mitad;
                mitad = Math.round((maximo+minimo)/2);
            }
        }else{
            alert("Lo siento, no pude adivinar tu numero");
        }
    }
}

$botonEmpezar.onclick = adivinando;
$botonReiniciar.onclick= function(e){
    e.preventDefault();
    adivinanza = "";
    mayor= "";
    maximo = 100;
    minimo = 0;
    mitad = Math.round((maximo+minimo)/2);
    adivinando();
}
