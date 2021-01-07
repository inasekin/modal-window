'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
    console.log(btnsOpenModal[i].addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
    // console.log('A key was pressed!');
    // console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

const name = 'Jonas';

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    return a;
}

function second(x, y) {
    var c = 2;
    return c;
}

const x = first();

console.log(x);
