// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

let arr = str.split(' ');
console.log(str);
console.log(arr);
///////////////////////////////////////////////////////
let arrayNew = (str) => {

    let split = str.split(' ');
    return split
};
console.log(arrayNew('Ревуть воли як ясла повні'));

let tractor = arrayNew('по лесам по полям синий трактор едет к нам');
console.log(tractor);

