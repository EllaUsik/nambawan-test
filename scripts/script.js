'use strict';

const WINDOW_HEIGHT = window.innerHeight;

const BLACK_CLASS = 'pagination-element-black';
const WHITE_CLASS = 'pagination-element-white';
const FOCUS_CLASS = 'pagination-element-focus';

const firstPagElement = document.getElementById('firstPag');
const secondPagElement = document.getElementById('secondPag');
const thirdPagElement = document.getElementById('thirdPag');

window.addEventListener('scroll', (evt) => {
  const scrollPosition = document.scrollingElement.scrollTop;

  if (scrollPosition < WINDOW_HEIGHT / 2) {

    firstPagElement.classList.remove(BLACK_CLASS);
    firstPagElement.classList.add(FOCUS_CLASS);

    secondPagElement.classList.remove(FOCUS_CLASS);
    secondPagElement.classList.add(WHITE_CLASS);

    thirdPagElement.classList.remove(BLACK_CLASS);
    thirdPagElement.classList.add(WHITE_CLASS);

  } else if (scrollPosition >= WINDOW_HEIGHT / 2 && scrollPosition < (WINDOW_HEIGHT + WINDOW_HEIGHT / 2)) {
    firstPagElement.classList.remove(FOCUS_CLASS);
    firstPagElement.classList.add(BLACK_CLASS);

    secondPagElement.classList.remove(BLACK_CLASS);
    secondPagElement.classList.remove(WHITE_CLASS);
    secondPagElement.classList.add(FOCUS_CLASS);

    thirdPagElement.classList.remove(WHITE_CLASS);
    thirdPagElement.classList.remove(FOCUS_CLASS);
    thirdPagElement.classList.add(BLACK_CLASS);
  } else {

    secondPagElement.classList.remove(FOCUS_CLASS);
    secondPagElement.classList.add(BLACK_CLASS);

    thirdPagElement.classList.remove(BLACK_CLASS);
    thirdPagElement.classList.add(FOCUS_CLASS);

  }
});
