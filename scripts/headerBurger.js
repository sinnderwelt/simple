let headerBurgerBtn = document.querySelector('.headerNavIconBurger');
let headerBurgerBody = document.querySelector('.headerBodyBurger');
let heeaderIconCarts = document.querySelector('.headerUpIcon');

let headerBurgerTop = document.querySelector('.headerBurgerLineTop');
let headerBurgerCenter = document.querySelector('.headerBurgerLineCenter');
let headerBurgerBotton = document.querySelector('.headerBurgerLineBotton');

headerBurgerBtn.addEventListener('click', function(){

    if (headerBurgerBody.classList.contains('active')){
        headerBurgerBody.classList.remove('active');
        heeaderIconCarts.classList.remove('active');

        headerBurgerTop.classList.remove('lineTopActive');
        headerBurgerCenter.classList.remove('lineCenterActive');
        headerBurgerBotton.classList.remove('lineBottonActive');

    } else {

        headerBurgerBody.classList.add('active');
        heeaderIconCarts.classList.add('active');


        headerBurgerTop.classList.add('lineTopActive');
        headerBurgerCenter.classList.add('lineCenterActive');
        headerBurgerBotton.classList.add('lineBottonActive');
    }
});
