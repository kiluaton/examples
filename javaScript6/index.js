$.ajax({
    url: "http://jsonplaceholder.typicode.com/users",
    method: 'get',
    dataType: 'json', 
    crossDomain: true, 
    crossOrigin: true,
    success: function (data) {
        //  alert("Exito");
         console.log(data);

    },
    error: function (err) {
        // alert(err);
    }

});


// $.get("jsonplaceholder.typicode.com/users").done(function (data) {
//     console.log(data);
// });

