// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список



let foobar =(primitiveElements) =>{
    document.write(`<ul>`);
    for (const item of primitiveElements) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar([112, true, false, 'lol']);
let a = [1,2,3,4,5,6];
foobar(a);


