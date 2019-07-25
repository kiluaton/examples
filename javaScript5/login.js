var cuenta ={
    usuario : "kiluaton",
    password : "123123"
}


function ingresar() {
   
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    if(usuario == cuenta.usuario && password == cuenta.password){
        location.href="index.html"
        sessionStorage.setItem('activo', 'true');
    }else{
        alert("ingresa las weas bien ");
    }
    console.log();
  
}

var activo = sessionStorage.getItem('activo');



    console.log(activo);
    if(activo == 'true')
{
    console.log(activo);
    location.href="index.html";
}







