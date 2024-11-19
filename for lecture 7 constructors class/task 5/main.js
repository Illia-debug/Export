// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, products) {
        this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = products;
    }
}


let clients = [
    new Client(1, 'petro', 'petrovich', 'sobaka2000@gmail.com', '54511',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000},
        ]),
    new Client(2, 'retro', 'retrovich', 'sobaka2000@gmail.com', '54512',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(3, 'detro', 'detrovich', 'sobaka2000@gmail.com', '54513',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(4, 'getro', 'getrovich', 'sobaka2000@gmail.com', '54540',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(5, 'vetro', 'vetrovich', 'sobaka2000@gmail.com', '54550',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(6, 'metro', 'metrovich', 'sobaka2000@gmail.com', '54516',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(7, 'setro', 'setrovich', 'sobaka2000@gmail.com', '54570',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(8, 'tetro', 'tetrovich', 'sobaka2000@gmail.com', '54580',[
        {title: 'tv',price:13000},
    ]),
    new Client(9, 'letro', 'letrovich', 'sobaka2000@gmail.com', '54910',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, {title: 'tv',price:13000},
    ]),
    new Client(10, 'ketro', 'ketrovich', 'sobaka2000@gmail.com', '50410',[
        {title: 'tv',price:13000}, {title: 'tv',price:13000}, ])
];

let sort = clients.sort((c1,c2)=>   c1.order.length - c2.order.length);
console.log(sort)
