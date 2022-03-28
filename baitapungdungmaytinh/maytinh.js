 function cong(){
let a = document.getElementById("sohang1").value;
 let b = document.getElementById("sohang2").value;
a = parseInt(a);
b = parseInt(b);

 let c = a + b;
  document.getElementById("Ketqua").innerText = +c;
 }
 function tru(){
  let a = document.getElementById("sohang1").value;
  let b = document.getElementById("sohang2").value;
  a = parseInt(a);
  b = parseInt(b);

  let c = a - b;
  document.getElementById("Ketqua").innerText = +c;
 }
 function nhan(){
  let a = document.getElementById("sohang1").value;
  let b = document.getElementById("sohang2").value;
  a = parseInt(a);
  b = parseInt(b);

  let c = a * b;
  document.getElementById("Ketqua").innerText = +c;
 }

 function chia(){
  let a = document.getElementById("sohang1").value;
  let b = document.getElementById("sohang2").value;
  a = parseInt(a);
  b = parseInt(b);

  let c = a / b;
  document.getElementById("Ketqua").innerText = +c;
 }
