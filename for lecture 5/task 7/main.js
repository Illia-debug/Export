// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//  аргументом, який є числовим (тут використовувати цикл)


let li = (words, counter) =>{
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${words}</li>`)
    }
    document.write(`</ul>`)
}
li('hello', 5);