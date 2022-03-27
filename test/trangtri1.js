let x = document.getElementById("mychoice")
x.addEventListener("change", changefunction())
   function changefunction(){
        var selectValue = document.getElementById("mychoice").value;
        alert(selectValue)
}