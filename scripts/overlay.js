let menuOpenBurger = (function (options) {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.menu);
  // const body = document.querySelector('body');
  let _toggleMenu = function (e) {
    button.classList.toggle('hamburger_active');
    menu.classList.toggle('overlay_open');
    // body.classList.toggle('body-active-menu');
  }

  let addListeners = function () {
    button.addEventListener('click', _toggleMenu);
  }

  return {
    openMenu: addListeners
  };
})({
  button:'#toggle',
  menu:'#overlay' 
});

menuOpenBurger.openMenu();
