/*HACER QUE UNA FUNCION ORDENE UN VECTOR*/
function miSort(vector) {
    let len =vector.length;
    for (let i = 0; i < len; i++) {
        for(let j=0; j < len - 1; j++){
            if(arr[j] > arr[j-1]) {
                let tmp = arr[j];
                arr[j] = vector[j +1];
                vector[j +1] = tmp;
            }
        }
    }
}

let v = ["15", "Ana", "Carlos", "251", "Abril", "Zafiro"];
console.log(v);
let v2 = miSort(v);
console.log(v2);