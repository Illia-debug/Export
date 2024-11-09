// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// 1 перебрати його циклом whil
// let i= 0;
// while (i < numbers.length) {
//         let number = numbers[i];
//         console.log(number);
//         i++;
// }

// 2 перебрати його циклом for
// for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i= 0;
// while (i < numbers.length) {
//         let number = numbers[i];
//         console.log(number);
//         i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < numbers.length; i ++){
//         if([i] % 2 !== 0) {
//                 console.log(numbers[i])
//         }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numbers2=[];
//
// console.log(numbers.length);
//
// let i= 0;
//
// while (i <= numbers.length-1) {
//         let number = numbers[i];
//         if (numbers[i] % 2 === 0){
//             numbers2.push(numbers[i]);
//         }
//
//         console.log(number);
//         i++;
// }
// console.log(numbers2);
// document.write(numbers2);

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let numbers2 = [];
// for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0) {
//             // numbers2.push(numbers[i]);// пуш пхає в кінець
//             numbers2[numbers2.length] = numbers[i]//інший механізм
//         }
// }
// console.log(numbers2);
// document.write(numbers2);

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 3 === 0) {
//             // numbers2.push(numbers[i]);// пуш пхає в кінець
//             numbers[i] = "okten"//замінити
//         }
// }
// console.log(numbers);
// document.write(numbers);




// 8. вивести масив в зворотньому порядку.

// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// for (let number of numbers) {
//     console.log(number);
// }




// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// let i= 0;
// while (i < numbers.length) {
//         let number = numbers[i];
//         console.log(number);
//         i++;
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 2. перебрати його циклом for
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//    3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// let i= 0;
// while (i < numbers.length) {
//         let number = numbers[i];
//         if([i] % 2 !== 0) {
//                 console.log(number);
//         }
//         i++;
// }



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// for (let i = 0; i < numbers.length; i++){
//         if([i] % 2 !== 0) {
//                 console.log(numbers[i]);
//         }
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// let numbers2=[];
// let i= 0;
//
// while (i <= numbers.length-1) {
//         let number = numbers[i];
//         if (numbers[i] % 2 === 0){
//             numbers2.push(numbers[i]);
//         }
//
//         console.log(number);
//         i++;
// }
// console.log(numbers2);
// document.write(numbers2);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
//
// let numbers2 = [];
// for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0) {
//             // numbers2.push(numbers[i]);// пуш пхає в кінець
//             numbers2[numbers2.length] = numbers[i]//інший механізм
//         }
// }
// console.log(numbers2);
// document.write(numbers2);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 7. замінити кожне число кратне 3 на слово "okten"
// let  numbers  = [2,17,13,6,22,31,45,66,100,-18];
// let reversed = numbers.reverse();
// for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 3 === 0) {
//             // numbers2.push(numbers[i]);// пуш пхає в кінець
//             numbers[i] = "okten"//замінити
//         }
// }
// console.log(numbers);
// document.write(numbers);














