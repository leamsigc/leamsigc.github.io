//   for the nav mobile 
//nav bar
const nav = document.querySelector('.nav'); 
const ul= document.getElementById('menu_ul');
const menu= document.getElementById("toggle_js");
menu.addEventListener('click',function (e) {
    e.preventDefault();
    ul.classList.toggle('open');
    nav.classList.add('fixed');
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
       nav.classList.add('fixed');
    }
    else{
        nav.classList.remove('fixed');
    }
});