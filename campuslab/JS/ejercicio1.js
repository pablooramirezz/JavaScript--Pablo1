/*EJERCICIO 1 tabnine
Escribir una función que eleve al cuadrado todos los números impares de un vector
*/


function elevarImparesCuadrado (vector){
    for(let i=0; i<vector.length; i++){
        //Preguntar si es impar
        if (vector[i] % 2 !==0)
            //Si es impar, elevarlo al cuadrado
            vector[i] = vector[i] ** 2;
    }
    //Retornar el nuevo vector
    return vector
}

let v = [2, 5, 6, 7, -1];
console.log(v);
let v2 = elevarImparesCuadrado(v);
console.log(v2);
console.log(v);
