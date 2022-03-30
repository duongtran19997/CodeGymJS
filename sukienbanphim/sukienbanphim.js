window.addEventListener('keydown',moveball)
function moveball(abc) {
    let left = document.getElementById('nobita').style.left;
    let top = document.getElementById('nobita').style.top ;
    let next1;
    let next2;

    switch (abc.key){
        case "d":
            next1 = parseInt(left) + 10;
            break;
        case "a":
            next1 = parseInt(left) - 10;
            break;
        case "w":
            next2 = parseInt(top) - 10;
            break;
        case "s":
            next2 = parseInt(top) + 10;
            break;
    }
    document.getElementById('nobita').style.left = next1 + "px";
    document.getElementById('nobita').style.top = next2 + "px";
}