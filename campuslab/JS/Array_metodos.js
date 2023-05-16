/*Agrega al final*/
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);


/*Elimina el último*/
let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(lastElement);
console.log(arr);


/*Elimina el primero*/
let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(firstElement);
console.log(arr);


/*Agrega al inicio*/
let arr = [1, 2, 3];
arr.unshift(0, -1);
console.log(arr);


/*Elimina el primero también*/
let arr = [1, 2, 3];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr);
console.log(arr);




/*Los une*/
let arr1= [1, 2, 3];
let arr2= [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr);


/*Saca los elementos que se le diga dependiendo de su posicion*/
let arr = [1, 2, 3, 4, 5];
let removedElements = arr.splice(1,2);
console.log(removedElements);
console.log(arr);


/*Separa los elementos con el signo de puntuación que se le de*/
let arr = ['apple', 'orange', 'banana'];
let str = arr.join(', ');
console.log(str);


/*Devuelve la posicion del elemento y si no lo encuentra devuelve -1 */
let arr = ['apple', 'orange', 'banana'];
let index = arr.indexOf ('banana');
console.log(index);