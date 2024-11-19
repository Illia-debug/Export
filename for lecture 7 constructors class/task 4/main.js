// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client



class Client {
    constructor(id, name, surname, email, phone, order) {
        this.name = name,
            this.surname = surname,
            this.email = email,
            this.phone = phone,
            this.order = order
    }
}
class Product{
    constructor(phone) {
        this.phone = phone
    }
}

let clients = [
    new Client(1, 'petro', 'petrovich', 'sobaka2000@gmail.com', '54511',[
    new Product('sumsung', 'lg','apple')//так краще - не дае можливості помилитись
    ]),
    new Client(2, 'retro', 'retrovich', 'sobaka2000@gmail.com', '54512',{phone: 'apple'}),
    new Client(3, 'detro', 'detrovich', 'sobaka2000@gmail.com', '54513',{phone: 'siemens'}),
    new Client(4, 'getro', 'getrovich', 'sobaka2000@gmail.com', '54540',{phone: 'apple'}),
    new Client(5, 'vetro', 'vetrovich', 'sobaka2000@gmail.com', '54550',{phone: 'apple'}),
    new Client(6, 'metro', 'metrovich', 'sobaka2000@gmail.com', '54516',{phone: 'lg'}),
    new Client(7, 'setro', 'setrovich', 'sobaka2000@gmail.com', '54570',{phone: 'motorolla'}),
    new Client(8, 'tetro', 'tetrovich', 'sobaka2000@gmail.com', '54580',{phone: 'apple'}),
    new Client(9, 'letro', 'letrovich', 'sobaka2000@gmail.com', '54910',{phone: 'google'}),
    new Client(10, 'ketro', 'ketrovich', 'sobaka2000@gmail.com', '50410',{phone: 'nokia'}),
];
console.log(clients)