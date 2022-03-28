let click = document.getElementById("result")
click.addEventListener("click", button)

function button() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let x1, x2, x;
    let d = b * b - 4 * a * c;
    if (a == 0){
        if (b == 0, c == 0) {
            document.getElementById("x") = 'phuong trinh vo so nghiem';
        } else if (b == 0, c != 0) {
            document.getElementById("x") = 'phuong trinh vo nghiem';
        } else {
            x= -c/b;
            document.getElementById('x')= 'x =' + x;
        }
    }

        else {
            if (d < 0) {
                document.getElementById("x") = 'phuong trinh vo nghiem';
            }
            if (d = 0) {
                x = (-b) / (2 * a);
                document.getElementById("x") = 'x =' + x;
            }
            if (d > 0)
            {
                x1 = (-b - Math.sqrt(d)) / (2 * a);
                x2 = (-b + Math.sqrt(d)) / (2 * a);
                document.getElementById("x") = 'x1 =' + x1 + 'x2 =' + x2

            }

        }
    }