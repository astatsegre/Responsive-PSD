var menuIcon = document.querySelector('.icon-menu');

menuIcon.addEventListener('click', function(){
    var menu = document.querySelector('.main-nav-list');
    
    menu.classList.toggle('unhide');
})