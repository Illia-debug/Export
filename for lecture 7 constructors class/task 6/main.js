// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, ' +
// 'з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, ' +
// 'і додає його в поточний об'єкт car
function Car (model, made, year, maxSpeed, engineVolume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;

        this.drive = function () {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
        }
        this.info = function () {
            return `model: ${this.model}, made: ${this.made},year: ${this.year}, maxSpeed: ${this.maxSpeed}, engineVolume: ${this.engineVolume},`
        }
        this.increaseMaxSpeed = function (newSpeed) {
            return  newSpeed = this.maxSpeed + 20
        }
        this.changeYear = function (newValue) {
            return newValue = this.year, this.year = 1960;
        }
        this.addDriver = function Driver(user) {
            this.driver = user
        }
    }


let car1 = new Car('ferari', 'itali', 1978, 260, 3.5,);

console.log(car1)
console.log(car1.info());
console.log(car1.drive());
console.log(car1.increaseMaxSpeed());
console.log(car1.changeYear());
car1.addDriver('sadas')











