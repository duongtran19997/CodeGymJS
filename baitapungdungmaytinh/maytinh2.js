function setOutput(value) {
    document.getElementById('input').value += value;
}

function calculator() {
    let output = document.getElementById('input').value;
    let result = eval(output);
    document.getElementById('input').value = result;
}

function clear() {
    document.getElementById('input').value = '';
}