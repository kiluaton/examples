

$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('SUMA')" title="">Quieres SUMA?</a></p>
<div id="SUMA">
        <input type="number" id='numero1' >
        <input type="number" id='numero2' >
        <button onclick="botonSumar()" >SUMA </button>
</div>`);
function botonSumar() {

    var numero1 = $("#numero1").val(); //jquery
    var numero2 = document.getElementById("numero2").value; // javascript 
    var resultado = parseInt(numero1) + parseInt(numero2);
    console.log(numero1 + " + " +numero2 + " = "+ resultado);
}

function botonRestar() {
    var numero3 = $("numero3").val();
    var numero4 = $("numero4").val();
    var resultado = parseInt(numero3 - numero4);
    console.log(numero3 + " - " +numero4 + " = "+ resultado);
}
$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('RESTA')" title="">Quieres RESTA?</a></p>
<div id="RESTA">
        <input type="number" id='numero3' >
        <input type="number" id='numero4' >
        <button onclick="botonRestar()" >MULTIPLICAR </button>
</div>`);

function botonMulti() {
    var numero5 = $("numero5").val();
    var numero6 = $("numero6").val();
    var resultado = parseInt(numero5 * numero6);
    console.log(numero5 + " * " +numero6 + " = "+ resultado);
}
$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('MULT')" title="">Quieres MULT?</a></p>
<div id="MULT">
        <input type="number" id='numero5' >
        <input type="number" id='numero6' >
        <button onclick="botonMulti()" >MULTIPLICAR </button>
</div>`);

function botonDiv() {
    var numero7 = $("numero7").val();
    var numero8 = $("numero8").val();
    var resultado = parseInt(numero7 / numero8);
    console.log(numero7 + " / " +numero8 + " = "+ resultado);
    window.alert(resultado);
}
$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('DIV')" title="">Quieres Dividir?</a></p>
<div id="DIV">
        <input type="number" id='numero7' >
        <input type="number" id='numero8' >
        <button onclick="botonDiv()" >DIVIDIR </button>
</div>`);



// function muestra_oculta(id){

//     $('SUMA').style.display ='none';
//     $('RESTA').style.display ='none';
//     $('MULT').style.display ='none';
//     $('DIV').style.display ='none';
   
//     if (document.getElementById){ //se obtiene el id
//             var el = $(id); //se define la variable "el" igual a nuestro div
//             el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
//     } 
// }



// function inicio(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente */
//     muestra_oculta ('SUMA');
//     muestra_oculta ('RESTA');
//     muestra_oculta ('MULT');
//     muestra_oculta ('DIV');
// }

// inicio()

