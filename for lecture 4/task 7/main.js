// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл)
// та виводить його через document.write
function li (words, counter) {
document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${words}</li>`)
    }
document.write(`</ul>`)
}
li('hi', 10);