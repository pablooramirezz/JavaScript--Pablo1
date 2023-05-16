/*For*/
function porcentajes(arr, por) {
    let vec = [];
    for (let i=0; i < arr.lenght; i++)
      vec.push(Math.round(arr[i] * por))
    return vec
}

/*ForEach*/
const porcentajes3 = function (arr, por) {
    let vec = [];
    arr.forEach(element => {
        vec.push(Math.round(element * por));
    });
    return vec;
}

/*Map*/
const porcentrajes2 = function (arr, por) {
    return arr.map(e => Math.round(e * por));
}

const mimap = (arr, por) => arr.map(e => Math.round(e * por))

let vec = [1000, 656];
let p = 0.19;
console.log(porcentajes(vec, p))
console.log(porcentajes2(vec, p))
console.log(porcentajes3(vec, p))
console.log(mimap(vec, p))





LeetCode