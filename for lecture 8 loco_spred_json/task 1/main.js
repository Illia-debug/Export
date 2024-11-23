// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
let user = {
    name: 'vasa',
    skills: ['html', 'js'],
    greeting(){}
}




function deepClonner(obj) {
    if (obj === undefined | obj === null | obj ===NaN) {
        return '?????????'
    } else
    {
        let functions = [];
        for (const objKey in obj) {
           if (typeof obj[objKey] === 'function'){
               const fooClone = obj[objKey].bind({});
               functions.push(fooClone, objKey);


           }
        }
        console.log(functions);

        let cloneObg = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObg[func.key] = func
        }
        console.log(cloneObg);
        return cloneObg
    }
}


deepClonner({id: 1, name: 'lala', greeting:function (){}, greeting1: function (){} });






