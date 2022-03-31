

let click = document.getElementById("nhap")
click.addEventListener("click",button)
function button() {
    let x = document.getElementById('cannang').value
    let y = document.getElementById('chieucao').value
    let a = x/(y*2)
    document.write(+a)
    if (a < 18.5) {
        document.write("hoi gay")
    } else if (18.5 <= a < 25) {
        document.write('you look so beautiful')
    } else if (25 <= a < 30) {
        document.write("so fat")
    } else if (a >= 30) {
        document.write("piggggggggggggg!!")
    }else {
        "mày nên đi bệnh viện thay vì mất thời gian ở đây"
    }
}