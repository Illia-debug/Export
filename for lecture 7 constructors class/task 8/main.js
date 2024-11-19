// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Girls{
        constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let girls = [
   new Girls('dysa', "29", 32),
   new Girls('lala', "29", 33),
   new Girls('kiki', "29", 34),
   new Girls('koko', "29", 35),
   new Girls('popo', "29", 36),
   new Girls('dodo', "29", 37),
   new Girls('lili', "29", 38),
   new Girls('viki', "29", 39),
   new Girls('diki', "29", 40),
   new Girls('piki', "29", 41),
];

class Prince {
       constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince =
    new Prince('Sasha', 30, 36 );
    prince.greeting = function (girl){
        return `wife: ${girl}`;
    }

    console.log(prince.greeting(girls[4].name))





for (let girl of girls) {
    if (girl.footSize === 36) {
            console.log(girl.name)
    }
}











// for (let girl of girls) {
//     if (girl.footSize === prince[0].shoeSize) {
//         Prince.prototype.add= function () {
//               return `
//     }wife: ${girl}`
//         }
//     }
// }
// console.log(prince)
