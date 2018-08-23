(() => {
  const navWrapper = document.querySelector('.nav-wrapper');
  const ul = document.querySelector('[data-js="nav-bar"]');
  const ulSocial = document.querySelector('[data-js="socialIcons"]');
  const menu = document.querySelector('[data-js="toggle_js"]');
  menu &
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    ul.classList.toggle('open');
    ulSocial.classList.toggle('open');
    navWrapper.classList.add('fixed');
  });
  window.onclick = function(e) {
    if (e.target.className === 'nav__link' || e.target.className == 'toggle') {
      if (e.target.className === 'nav__link') {
        ul.classList.remove('open');
        ulSocial.classList.remove('open');
      }
    } else {
      ul.classList.remove('open');
      ulSocial.classList.remove('open');
    }
  };
  window.addEventListener('scroll', function() {
    let x = window.scrollY;
    if (x > 100) {
      navWrapper.classList.add('fixed');
      navWrapper.style.backgroundColor = 'rgb(49, 49, 78)';
    } else {
      navWrapper.classList.remove('fixed');
      navWrapper.style.backgroundColor = 'none';
    }
  });
  
    const $nav = document.querySelector('[data-js="nav-bar"]');
    $nav.addEventListener('click', scrollToElement);
  
  function scrollToElement(e) {
    const elementToScrollTo = document.querySelector(
      `${e.target.getAttribute('href')}`
    );
    e.preventDefault();
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  
})()