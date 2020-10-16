console.log("Shazam conectado");

const $botonSecreto = document.querySelector('#btn-secreto');

$botonSecreto.onclick = function(e){
    e.preventDefault();
    const numero = parseInt(document.querySelector('#adivinanza').value);
    validarNumeroSecreto(numero);
    
    const esExito = validarNumeroSecreto(numero) === '';
    if (esExito) {
        document.querySelector('#adivinanza').className = "";
        return console.log(numero);;
    }else{
        document.querySelector('#adivinanza').className = "error";
        return console.log(validarNumeroSecreto(numero));
    }

}

function validarNumeroSecreto(numero){
    if (!(/^[0-9]{1,2}$/.test(numero))) {
        return 'El numero a ser adivinado no puede ser decimal, ni menor que 0 ni mayor a 100'; 
    }else{
        return '';
    }
} 