    function setOutput(value) {
    document.getElementById('input').value += value;
    }
    function calculator(){
    let input = document.getElementById('input');
     result = eval('input');
        document.getElementById('input').value = result;
    }
    function clear(){
        document.getElementById('input').value = '';
    }