// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день(можна замість плану на день, назву дня англійською).

let numberDay = prompt('enter color');
switch (numberDay){
    case '1':
        console.log('sonday');
        break;
    case '2':
        console.log('monday');
        break;
    case '3':
        console.log('tuesday');
        break;
    case '4':
        console.log('wednesday');
        break;
    case '5':
        console.log('thursday');
        break;
    case '6':
        console.log('friday');
        break;
    case '7':
        console.log('saturday');
        break;
    default:
        console.log('?')
}