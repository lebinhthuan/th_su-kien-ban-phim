//Function di chuyển bằng phím chuột ấn button
function moveRight() {
    imgObj = document.getElementById('myImage');
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

function moveLeft() {
    imgObj = document.getElementById('myImage');
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}

function moveUp() {
    imgObj = document.getElementById('myImage');
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
}

function moveDown() {
    imgObj = document.getElementById('myImage');
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}

//Function di chuyển bằng phím mũi tên trên bàn phím.
function moveByPressKey() {
    imgObj = document.getElementById('myImage')
    switch (event.keyCode) {
        case 37:   //phim Left 
            imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px'
            break;
        case 39:    //phim Right 
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
            break;
        case 38:    //phim UP 
            imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px'
            break;
        case 40:    //phim Down 
            imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px'
            break;
    }
}