const sections = $('section');
const display = $('.maincontent');
const sideMenu = $('.fixed-menu');
const menuItems = sideMenu.find('.fixed-menu__item');
const hamburgerPlank = $('.hamburger__plank');
console.log(hamburgerPlank);

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = (sectionEq) => {
  const position = sectionEq * -100;

  if (isNaN(position)) {
    console.error('передано неверное значение в countSectionPosition');
    return 0;
  }

  return position;
};

const changeMenuThemeForSection = (sectionEq) => {
  const currentSection = sections.eq(sectionEq);
  const menuTheme = currentSection.attr('data-sidemenu-theme');
  const activeClass = 'fixed-menu_shadowed';
  const hamburgerDark = 'hamburger__plank_dark';

  if (menuTheme === 'black') {
    sideMenu.addClass(activeClass);
    hamburgerPlank.addClass(hamburgerDark);
  } else {
    sideMenu.removeClass(activeClass);
    hamburgerPlank.removeClass(hamburgerDark);
  }
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
  items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = (sectionEq) => {
  if (inScroll) return;

  const transitionOver = 1000;
  const mouseInertiaOver = 300;

  inScroll = true;

  const position = countSectionPosition(sectionEq);

  changeMenuThemeForSection(sectionEq);

  display.css({
    transform: `translateY(${position}%)`
  });

  resetActiveClassForItem(sections, sectionEq, 'active');

  setTimeout(() => {
    inScroll = false;
    resetActiveClassForItem(menuItems, sectionEq, 'fixed-menu__item_active');

  }, transitionOver + mouseInertiaOver);
};
  
const viewportScroller = () => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {
      if (nextSection.length) {
        performTransition(nextSection.index());
      }

    },
    prev() {
      if (prevSection.length) {
        performTransition(prevSection.index());
      }
    },
  };
};

$(window).on('wheel', (e) => {
  const deltaY = e.originalEvent.deltaY;
  const scroller = viewportScroller();

  if(deltaY > 0) {
    scroller.next();
  }

  if (deltaY < 0) {
    scroller.prev();
  }
});

$(window).on('keydown', (e) => {
  console.log(e.keyCode);
  const tagName = e.target.tagName.toLowerCase();
  const userTypingInInputs = tagName === 'input' || tagName === 'textarea';
  const scroller = viewportScroller();

  if (userTypingInInputs) return;

  switch (e.keyCode) {
    case 38: //prev
      scroller.prev();
      break;

    case 40: //next
      scroller.next();
      break;
  }
});

$('.wrapper').on('touchmove', (e) => e.preventDefault());

$('[data-scroll-to]').click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr('data-scroll-to');
  const reqSection = $(`[data-section-id=${target}]`);

  //console.log($('[data-section-id]'));
  //console.log(target);
  //console.log($(`[${target}]`));
  //console.log(reqSection.index());
  performTransition(reqSection.index());
});

if (isMobile) {
  // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
  $("body").swipe({
    swipe:function(event, direction) {
      const scroller = viewportScroller();
      let scrollDirection = '';

      if (direction === 'up') scrollDirection = 'next';
      if (direction === 'down') scrollDirection = 'prev';
      
      scroller[scrollDirection]();
    }
  });
};
