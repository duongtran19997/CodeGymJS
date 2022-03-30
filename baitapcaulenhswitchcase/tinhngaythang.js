let click = document.getElementById('enter');
click.addEventListener('click', button);
function button() {
    //phải nhét a vào trong function thì nó mới chạy??
    let a = +document.getElementById('nhapthang').value;
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('ketqua').innerHTML = '31 ngay';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('ketqua').innerHTML = '30 ngay';
            break;
        case 2:
            document.getElementById('ketqua').innerHTML = '28 hoặc 29 ngày';
            break;
        default:
            document.getElementById('ketqua').innerHTML = 'ngáo vừa thôi';
            break;
    }
}