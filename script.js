'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
// select multiple classes and loop throgh
const close = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const open = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', open);

btnCloseModel.addEventListener('click', close);
overlay.addEventListener('click', close);
