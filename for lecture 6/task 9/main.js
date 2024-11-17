// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const cards = []
for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        const card = {cardSuit: cardSuit, cardValue: cardValue};
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards)


console.log(cards.find(card => card.cardValue === 'ace' && card.cardSuit === 'spade'));

console.log(cards.filter(card => card.cardValue === '6'));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.cardSuit === 'diamond'));

console.log(cards.filter(card => card.cardSuit === 'clubs'&& (card.cardValue !=='6' && card.cardValue !=='7'&& card.cardValue !=='8' && card.cardValue !=='9' )  ));
