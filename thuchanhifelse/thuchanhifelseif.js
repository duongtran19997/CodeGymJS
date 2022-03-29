let input = prompt('nhap ID','')
if (input == 'admin') {
    let password = prompt('nhap password','')

    if (password== 'TheMaster') {
        alert('welcome')
    } else if (password == '') {
        alert('canceled')
    } else {
        alert('Wrongpass')
    }
}else if(input == ''){
    alert('Canceled')
}else {
    alert('i dont know you')
}