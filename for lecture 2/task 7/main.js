// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 44;
if (time >= 1 && time < 15) {
    console.log('one part');
}else if (time >= 15 && time < 30) {
    console.log('two part');
}else if (time >= 30 && time < 45) {
    console.log('three part');
}else if (time >= 45 && time < 60) {
    console.log('four part');
}else {
    console.log('?');
}











