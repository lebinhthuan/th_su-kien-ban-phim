function sangPhai() {
    let image = document.getElementById('rubik');
    image.style.left = parseInt(image.style.left) + 10 + 'px'
    // image.style.left += 10;
}

 function diChuyen() {
    switch (event.keyCode) {
        case 37: {
            let image = document.getElementById('rubik');
            image.style.left = parseInt(image.style.left) - 10 + 'px'
            break;
        }
        case 39: {
            let image = document.getElementById('rubik');
            image.style.left = parseInt(image.style.left) + 10 + 'px'
            break;
        }
    }
}