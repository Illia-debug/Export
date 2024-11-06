let book1 = {
    title: 'Big Foot',
    pageCount: 400,
    genre:'fantasy',
    authors: [
        {name: 'Bob',age: 12},
        {name: 'Bat',age: 13},
        {name: 'Rat',age: 14}
    ]
};
let book2 = {
    title: 'Small Foot',
    pageCount: 401,
    genre:'fantasy',
    authors: [
        {name: 'Lost',age: 12},
        {name: 'Infinity',age: 13},
        {name: 'Log',age: 14}
    ]
};
let book3 = {
    title: 'Big Head',
    pageCount: 402,
    genre:'fantasy',
    authors: [
        {name: 'Snow',age: 12},
        {name: 'Frost',age: 13},
        {name: 'Cloud',age: 14}
    ]
};
console.log(book1.authors[0].name);
console.log(book1.authors[0].age);
console.log(book1.authors[1].name);
console.log(book1.authors[1].age);
console.log(book1.authors[2].name);
console.log(book1.authors[2].age);
console.log(book1.authors[0].name, book1.authors[0].age, book2, book3);