// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange
// (sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,
// [{currency:'USD',value:25},
// {currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAN,currencyValues,exchangeCurrency) {
         let  selectedCurensy;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            selectedCurensy = item;

        }
    }
    let result = sumUAN/selectedCurensy.value
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'USD'));
