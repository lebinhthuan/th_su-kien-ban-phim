let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';

}
function dichuyenP(){
    switch(event.keyCode){
        case 37: {
            
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
            break
        }
        case 39: {

            imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
            break
        }
    }
}