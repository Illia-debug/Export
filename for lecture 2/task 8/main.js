// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

let day = 31;
if (day >= 1 && day < 10) {
    console.log('one part');
}else if (day >= 10 && day < 20) {
    console.log('two part');
}else if (day >= 20 && day <= 31) {
    console.log('three part');
}else {
    console.log('?');
}