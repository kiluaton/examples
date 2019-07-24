// window.alert("bienvenido a Argentina jeje");




function botonUno(texto) {
    window.alert(texto);
//   console.log(texto)
}
function botonDos(texto ) {
    console.log(texto)
}
function botonTres(texto ) {
    botonDos(texto);
    botonUno(texto);
}

function botonCuatro(){
    var campoDeTexto =document.getElementById("texto").value;
    botonDos(campoDeTexto);
}
// funcionUno();