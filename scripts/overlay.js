// Вариант 1:
// let menuOpenBurger = (function (options) {
//   let button = document.querySelector(options.button);
//   let menu = document.querySelector(options.menu);
//   // const body = document.querySelector('body');
//   let _toggleMenu = function (e) {
//     button.classList.toggle('hamburger_active');
//     menu.classList.toggle('overlay_open');
//     // body.classList.toggle('locked');
//   }

//   let addListeners = function () {
//     button.addEventListener('click', _toggleMenu);
//   }

//   return {
//     openMenu: addListeners
//   };
// })({
//   button:'#toggle',
//   menu:'#overlay' 
// });

// menuOpenBurger.openMenu();

// Вариант 2:

$(document).ready(function() {

  let hamburger = (options => {
    let button = document.querySelector(options.button);
    let menu = document.querySelector(options.menu);
    let body = document.querySelector('body');
    let itemsList = document.getElementById('overlay-menu__list').children;

    let counter = 0;
    let flag = false;
    let startMenuAnimation = function startMenuAnimation() {
      let elem = itemsList[counter];
      elem.classList.toggle('slideInUp');
      counter++;
      // console.log('counter = ' + counter);
      // console.log('длина всех элементов ' + itemsList.length);
      if (counter < itemsList.length) {
        setTimeout(startMenuAnimation, 100);
      }
      if (counter === itemsList.length) {
        counter = 0;
        // console.log('Обнуляем счетчик ' + counter);
      }
    };

    let _toggleMenu = function(e) {
      flag = !flag;
      button.classList.toggle('hamburger_active');
      menu.classList.toggle('overlay_open');
      body.classList.toggle('locked');
      startMenuAnimation();
    };

    let closeMenu = function(e) {
      flag = !flag;
      button.classList.remove('hamburger_active');
      menu.classList.remove('overlay_open');
      body.classList.remove('locked');
      startMenuAnimation();
    };

    let addListeners = function() {
      button.addEventListener('click', _toggleMenu);
  
      menu.addEventListener('click', function(event) {
        target = event.target;
        console.log(target);
        if (target.classList.contains('overlay-menu__link')) {
          _toggleMenu();
        }
      });
    };

    document.addEventListener('keydown', function(e) {
    // $(window).on('keydown', (e) => {
      console.log(e.keyCode);
      if (e.keyCode == 27) {
        if(flag) {
          closeMenu();
        }
      } 
    });
  
    return {
      init: addListeners
    };
  })({
    button:'#toggle',
    menu:'#overlay' 
  });

  hamburger.init();

});