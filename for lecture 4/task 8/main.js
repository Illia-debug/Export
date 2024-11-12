// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список (ul li) та виводить
// його через document.write
function foobar(primitiveElements) {
    document.write(`<ul>`);
    for (const item of primitiveElements) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar([112, true, false, 'lol']);