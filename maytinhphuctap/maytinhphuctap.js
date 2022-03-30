function setoutput(value){
    document.getElementById('nhapso').value += value;
}
function calculator(){
    let output = document.getElementById('nhapso').value;
    let result = eval(output);
    document.getElementById('nhapso').value = result;
}
function  clear() {
    document.getElementById('nhapso').value = '';
}