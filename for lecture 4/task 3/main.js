// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру
// висотою h, та радіутом r
// S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH

function cylinderS (radius, height) {
    return (2 * Math.PI * radius ** 2) + (2 * Math.PI * radius * height)
}

console.log(cylinderS(10,10))