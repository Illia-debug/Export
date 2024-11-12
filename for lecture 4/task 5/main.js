// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить
// його через document.write. Текст задати через аргумент
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
];

function writer(object1, object2, object3, object4) {
    document.write(`
 <div>
 <h2>${object1} ${object2}</h2>
 <p>${object3}</p>
 <img src="${object4}" alt="">
 </div>
 `);
}


// writer(printerArray(products));
writer('milk', 22, 'some milk','https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg' );
writer('tomato', 47, 'some juice','https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74' );




