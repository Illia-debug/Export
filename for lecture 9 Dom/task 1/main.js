// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divBlock = document.createElement('div');
document.body.appendChild(divBlock);//додав в код баді
divBlock.classList.add('wrap');
divBlock.classList.add('collapse');
divBlock.classList.add('alpha');
divBlock.classList.add('beta');//додав класси
divBlock.innerText = 'hello octen';

const cloneDiv = divBlock.cloneNode(true);
document.body.appendChild(cloneDiv);


