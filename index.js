 function cycleImg() {
    var img = document.getElementById("img");
    img.src = images[x];
    x++;        
    if(x >= images.length) {
        x = 0;
    } 
    fadeImg(img, 100, true);
    setTimeout("changeImage()", 15000);
}

function fadeImg(el, val, fade) {
    if(fade === true) {
        val--;
    } else {
        val ++;
    }       
    if(val > 0 && val < 100) {
        el.style.opacity = val / 100;
        setTimeout(function(){ fadeImg(el, val, fade); }, 10);
    }
}

var images = [], x = 0;
images[0] = "plane1.jpg";
images[1] = "plane2.jpg";
images[2] = "plane3.jpg";
images[3] = "plane4.jpg";
setTimeout("changeImage()", 15000); 
