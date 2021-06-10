'use strict';

const mod = document.querySelector('.modal');
const over = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal');

let classR = function (className) {
mod.classList.remove(className);
over.classList.remove(className);
};
let classA = function (className) {
mod.classList.add(className);
over.classList.add(className);
};
function funOne() {
classR('hidden');
}
function funTwo() {
classA('hidden');
}
function funThree() {
classA('hidden');
}
for (let i = 0; i < show.length; i++) show[i].addEventListener('click', funOne);

close.addEventListener('click', funTwo);

over.addEventListener('click', funThree);

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !mod.classList.contains('hidden')) {
funThree();
}
});
