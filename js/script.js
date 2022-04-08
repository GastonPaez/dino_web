window.onscroll = function(){

    var position = window.pageYOffset || document.documentElement.scrollTop;
    
    
    var img1 = document.getElementById('img__dino1');
    var img2 = document.getElementById('img__dino2');
    img1.style.bottom = position * 0.1 + "px";
    img2.style.top = position * 0.1 + "px";
    


}