let year = +prompt('enter years');
    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 == 0){
                alert('this is a gap year')
            }else{
                alert('this is not a gap year')
            }
        }else{
            alert('this is a gap year')
        }
    }else {
        alert('this is a gap year')
    }