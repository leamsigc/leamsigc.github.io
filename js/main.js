//for the nav mobile 
//nav bar
const navWrapper = document.querySelector('.nav-wrapper'); 
const ul= document.getElementById('menu_ul');
const menu= document.getElementById("toggle_js");
menu.addEventListener('click',function (e) {
    e.preventDefault();
    ul.classList.toggle('open');
    navWrapper.classList.add('fixed');
});
window.onclick = function(e){
    if(e.target.className === 'nav__link' || e.target.className == 'toggle'){
        if(e.target.className === 'nav__link'){
            ul.classList.remove('open');
        }
    }else{
        ul.classList.remove('open');
    }
}
window.addEventListener('scroll', function(){
    let x = window.scrollY;
    if(x > 100 ){
        navWrapper.classList.add('fixed');
    //    console.log(navWrapper.style.backgroundColor);
       navWrapper.style.backgroundColor='rgb(49, 49, 78)';

    }
    else{
        navWrapper.classList.remove('fixed');
        navWrapper.style.backgroundColor='none';
        
    }
});

window.addEventListener('DOMContentLoaded', ()=>{
    // console.log('hello from the console');
    const $nav = document.querySelector('ul[data-js="nav-bar"]');
     $nav.addEventListener('click', scrollToElement);
});

function scrollToElement(e) {
    const elementToScrollTo = document.querySelector(`${e.target.getAttribute('href')}`);
    // console.log(elementToScrollTo);
    e.preventDefault();
    elementToScrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}