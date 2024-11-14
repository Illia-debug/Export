// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let numbers= [1, 2, 3, 2424, 123123, -11, 12312];
let numbers2 = [-100, 21312, 2, 34, 4353, 1231, 11, 0];



let numberFilter =  (numbers) => {
        let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {

            min = number
        }
    }
    return min;
}
console.log(numberFilter(numbers));
console.log(numberFilter(numbers2));
