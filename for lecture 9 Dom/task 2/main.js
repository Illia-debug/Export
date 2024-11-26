// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let info = ['Main', 'Products', 'About us', 'Contacts'];
let ulInfo = document.createElement('ul');
    ulInfo.classList.add('ulInfoElement')
for (let ulInfoElement of info) {
    let li = document.createElement('li');//створюемо лі
    li.innerText = ulInfoElement;//витяг наповнення
    ulInfo.appendChild(li);//додав в улку
}
document.body.appendChild(ulInfo);
