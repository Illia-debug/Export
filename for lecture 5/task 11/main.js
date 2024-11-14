// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numbers1 = [1, 2, 3, 12, 324, 2, 44];
let numbers2 = [1, -2, 33, -12, -324, 2, 44];


let sumaNumbers = (numbersArr) => {
    let iter = 0;
    for (const number of numbersArr) {
        iter = iter + number;
    }
    return iter;
}
console.log(sumaNumbers(numbers1));
console.log(sumaNumbers(numbers2));