let x = document.getElementById('cannang')
let y = document.getElementById('chieucao')
let a = x/(y*y)

let click = document.getElementById("nhap")
click.addEventListener("click",button)
function button() {
    document.write("BMI=" + a)
    if (a < 18.5) {
        document.write("hoi gay")
    } else if (18.5 <= a < 25) {
        document.write('you look so beautiful')
    } else if (25 <= a < 30) {
        document.write("so fat")
    } else if (a >= 30) {
        document.write("piggggggggggggg!!")
    }
}