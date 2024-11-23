// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}


let users = [
    new User(1, 'petro', 'petrovich', 'sobaka2000@gmail.com', '54511'),
    new User(2, 'retro', 'retrovich', 'sobaka2000@gmail.com', '54512'),
    new User(3, 'detro', 'detrovich', 'sobaka2000@gmail.com', '54513'),
    new User(4, 'getro', 'getrovich', 'sobaka2000@gmail.com', '54540'),
    new User(5, 'vetro', 'vetrovich', 'sobaka2000@gmail.com', '54550'),
    new User(6, 'metro', 'metrovich', 'sobaka2000@gmail.com', '54516'),
    new User(7, 'setro', 'setrovich', 'sobaka2000@gmail.com', '54570'),
    new User(8, 'tetro', 'tetrovich', 'sobaka2000@gmail.com', '54580'),
    new User(9, 'letro', 'letrovich', 'sobaka2000@gmail.com', '54910'),
    new User(10, 'ketro', 'ketrovich', 'sobaka2000@gmail.com', '50410'),
];
let filteredUsers = users.filter(function (value) {
    return value.id%2===0;
});
console.log(filteredUsers);