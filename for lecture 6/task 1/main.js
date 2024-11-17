// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let words1 = 'hello world';
let words2 = 'lorem ipsum';
let words3 = 'javascript is cool';
console.log(words1.length);
console.log(words2.length);
console.log(words3.length);

let strings = [words1, words2, words3];
for (const string of strings) {
    console.log(string.length)
}
