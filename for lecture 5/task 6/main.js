// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий
let titles = (identical) =>{
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