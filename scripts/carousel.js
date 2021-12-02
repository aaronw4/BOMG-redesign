var count = 0
showDoctor(count)

function changeCount(n) {
    showDoctor(count += n)
}

function clickDot(n) {
    showDoctor(count = n)
}

function showDoctor(n) {
    var doctors = document.getElementsByClassName('Doc-Profile')
    var dots = document.getElementsByClassName('dot')
    if (n >= doctors.length) {count = 0}
    if (n < 0) {count = doctors.length - 1}
    for (var i = 0; i < doctors.length; i++) {
        doctors[i].style.display = 'none'
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    doctors[count].style.display = 'block'
    dots[count].className += ' active'
}