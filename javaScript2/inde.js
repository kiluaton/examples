function botonSumar() {

    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    console.log(numero1 + " + " +numero2 + " = "+ resultado);
}

function botonRestar() {
    var numero3 = document.getElementById("numero3").value;
    var numero4 = document.getElementById("numero4").value;
    var resultado = parseInt(numero3 - numero4);
    console.log(numero3 + " - " +numero4 + " = "+ resultado);
}

function botonMulti() {
    var numero5 = document.getElementById("numero5").value;
    var numero6 = document.getElementById("numero6").value;
    var resultado = parseInt(numero5 * numero6);
    console.log(numero5 + " * " +numero6 + " = "+ resultado);
}

function botonDiv() {
    var numero7 = document.getElementById("numero7").value;
    var numero8 = document.getElementById("numero8").value;
    var resultado = parseInt(numero7 / numero8);
    console.log(numero7 + " / " +numero8 + " = "+ resultado);
    window.alert(resultado);
}

function muestra_oculta(id){

    document.getElementById('SUMA').style.display ='none';
    document.getElementById('RESTA').style.display ='none';
    document.getElementById('MULT').style.display ='none';
    document.getElementById('DIV').style.display ='none';
   
    if (document.getElementById){ //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    } 
}


$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('DIV')" title="">Quieres Dividir?</a></p>
<div id="DIV">
        <input type="number" id='numero7' >
        <input type="number" id='numero8' >
        <button onclick="botonDiv()" >DIVIDIR </button>
</div>`);


       function inicio(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
            muestra_oculta ('SUMA');
            muestra_oculta ('RESTA');
            muestra_oculta ('MULT');
            muestra_oculta ('DIV');
        }
        inicio();


        // $('#contenedor').append('<h2>¡Felicidades! Has insertado un texto en el div</h2>');
        // $('.contenedorClasss').append('<h2>¡Felicidades! Has insertado un texto en el div</h2>');
        // . refiere a ir a buscar todo lo que se llame contenedor class y le agrega <h2> dentro
         // # refiere a ir a buscar EL ID y le agrega <h2> dentro

        