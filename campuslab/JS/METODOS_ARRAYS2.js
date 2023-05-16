/*forEach*/
let arr =[1, 2, 3];
arr.forEach(function(element) {
    console.log(element);
});


/*Map*/
let arr = [1, 2, 3];
let mappedArr = arr.map(function(element) {
    return element * 2;
});
console.log(mappedArr);


/*FILTER*/
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(function(element) {
    return element % 2 === 0;
});
console.log(filteredArr);


/*REDUCE*/

/*suma*/
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

/*elemento maximo*/
let arr = [5, 10, 2, 8, 3];
let maxNumber = arr.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
});
console.log(maxNumber);

/*promedio*/
let arr =[5, 10, 2, 8, 3];
let sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
let average = sum / arr.length;
console.log(average);