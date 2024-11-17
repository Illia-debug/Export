// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// let sort = coursesAndDurationArray.sort((u1, u2) => {
//     return u1.monthDuration - u2.monthDuration;
// })
// console.log(sort);
//
// let filteredMonthDuration = sort.filter(function (value ){
//     return value.monthDuration > 5;
// })
// console.log(filteredMonthDuration);
//
// let addId = filteredMonthDuration.map(function (value,index) {
//     return {
//         title: value.title,
//         monthDuration: value.monthDuration,
//         id: index+1
//     }
// });
// console.log(addId)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const map1 = coursesAndDurationArray
    .sort((u1, u2) => {
    return u1.monthDuration - u2.monthDuration;
})
    .filter(function (value ){
    return value.monthDuration > 5;
})
    .map((value,index) => {
        value.id = index+ 1;
        return  value;
    });
console.log(map1);






