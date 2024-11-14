// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbers = [11,22,33,44]
let numbers2 = [111241,-2,33214,4124124]



let swap = (arr, index1, index2) =>{
    let iter = arr[index1];
    arr[index1]=arr[index2];
    arr[index2] = iter;

    return arr;
}
console.log(swap(numbers, 0, 1))
console.log(swap(numbers2, 0, 1))
