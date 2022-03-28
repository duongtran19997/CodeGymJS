 let click = document.getElementById("result");
 click.addEventListener("click",button);
 function button(){
    let fcurrency = document.getElementById("fcurrency").value;
     let tcurrency = document.getElementById("tcurrency").value;
     let amount = document.getElementById("amount").value;
     let result = amount * tcurrency / fcurrency;
     document.getElementById("y").innerHTML= "result :" + result
 }
