var menuIcon = document.querySelector('.icon-menu');
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var galleryDiv = document.querySelectorAll('.desctop-gallery-container .photo-container div');
var photoContainer = document.querySelector('.photo-container');
var marginLeft = 0;
var galleryLength = (galleryDiv.length - 3) * 327;

menuIcon.addEventListener('click', function(){
    var menu = document.querySelector('.main-nav-list');
    
    menu.classList.toggle('unhide');
})

btnRight.addEventListener('click', function() {
    
    if (marginLeft > -galleryLength) {
        photoContainer.style.marginLeft = marginLeft - 327 + "px";
        marginLeft = marginLeft - 327;
    }
})

btnLeft.addEventListener('click', function() {
    if (marginLeft < 0) {
        photoContainer.style.marginLeft = marginLeft + 327 + "px";
        marginLeft = marginLeft + 327;
    }
})







