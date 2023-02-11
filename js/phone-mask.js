const selectorTel = document.querySelector('.modal-window-input[type="tel"]');

const imTel = new Inputmask('+38 (099) 999-99-99');
imTel.mask(selectorTel);
