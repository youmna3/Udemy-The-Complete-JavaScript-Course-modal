'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
// select multiple classes and loop throgh
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', () => {
    console.log('b');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
btnCloseModel.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
