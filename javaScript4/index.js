function botonEntrar() {
    var user = $("usuario").value;
    var pass = $("contraseña").value;
    var entrar = (user) + (pass);
    
}


$('#contenedor').append( `<p><a style='cursor: pointer;' onclick="muestra_oculta('USER')" title="">Quieres Loguearte?</a></p>
<div id="USER">
Usuario <input  id='usuario' >
Password <input id='contraseña' >
<button onclick="botonEntrar()" >Login </button>
</div>`);

function muestra_oculta(id){
    if (user = 'jorge'){ 
        console.log(user + " y " + pass + " = "+ entrar);
        window.alert(entrar + "Log Exitoso");   
    } else {
        window.alert("datos erroneos, vuelve a ingresar los datos"); 
    }
    
    }