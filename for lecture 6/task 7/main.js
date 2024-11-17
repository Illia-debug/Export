// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел,
//     та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
// let sort = nums.sort((numbers1, numbers2) => {
//     return numbers1 - numbers2
// });
// console.log(sort);
//
// let sort2 = nums.sort((numbers1, numbers2) => {
//     return numbers2 - numbers1
// });
// console.log(sort2);
//////////////////////////////////////////////////////////////////////
// function sortNums(arrayNums, direction) {
//     if (direction ==='ascending') {
//         return arrayNums.sort((a, b) => a - b)
//
//     } if (direction ==='descending') {
//         return arrayNums.sort((a, b) => b - a)
//     }
// }
// ...........................................................................
function sortNums(arrayNums, direction) {
    if (direction ==='ascending') return arrayNums.sort((a, b) => a - b);//те саме але в 1 рядок

    if (direction ==='descending') return arrayNums.sort((a, b) => b - a)

}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

