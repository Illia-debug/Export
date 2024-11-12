// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними ' +
// 'полями id,name,age , та виводить їх в документ. Для кожного об'єкту
// окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
function foobar(users) {
    for (const user of users) {
        document.write(`<div>name-${user.name}-age-${user.age}-id-${user.id}</div>`)
    }
};
foobar(users)

