
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
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

let reduce = cards.reduce((accumulator,card) =>{
if(card.cardSuit === 'spade') {
accumulator.statSpades.push(card);
} else if (card.cardSuit === 'diamond') {
    accumulator.statDiamonds.push(card)
} else if (card.cardSuit === 'heart') {
        accumulator.statHearts.push(card)
} else if (card.cardSuit === 'clubs' ) {
     accumulator.statClubs.push(card)
}
return accumulator
},{ statSpades:[], statDiamonds:[], statHearts:[], statClubs:[] });
console.log(reduce);
