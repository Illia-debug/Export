// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та
// виводить його через document.write. Текст li задати через аргумент
// всім однаковий
function titles(identical) {
   document.write(
 `      <ul>
        <li>${identical}</li>
        <li>${identical}</li>
        <li>${identical}</li>
    </ul>`
   )
};
titles('hi! octen');
titles('hi world!');
titles('hi! octen hi world!');


