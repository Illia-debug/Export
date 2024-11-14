// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
let cylinderSquare = (radius, height) => (2 * Math.PI * radius ** 2) + (2 * Math.PI * radius * height);
let cylinder1 = cylinderSquare(12, 13.12);
let cylinder2 = cylinderSquare(122, 13.12);
console.log(cylinder1);
console.log(cylinder2);