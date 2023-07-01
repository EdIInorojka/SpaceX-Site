let burger = document.querySelector('.header-menu')
let menu = document.querySelector('.header-nav')

burger.addEventListener('click',
function(){
    burger.classList.toggle('header-menu--active');

    menu.classList.toggle('header-nav--active');
})