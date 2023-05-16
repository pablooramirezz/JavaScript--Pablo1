/*EJEMPLO
let matrix = [["salmon", "halibut"],["coral", "reef"] ];
console.log(matriz);
console.log(matriz[1][0]);*/


/*CREAR MATRICES*/
function crearMatriz(matriz, fil, col) {
    for (let i=0; i<fil; i++)
        matriz[i] = new Array(col);

    return matriz
}

/*let matrix = [];
let fil =2, col = 2;
/*matriz = crearMatriz(matriz, fil, col);
console.log(matriz);

/*RECORRER MATRIZ*/
function imprimirMatriz(matriz) {
    for(let f=0; f < matriz.length; f++) {
        let fila = "";
        for(c=0; c<matriz[f].length; c++) {
            fila += matriz[f][c] + "\t\t";
        }console.log(fila);
        //console.log(matriz[f].join("\t\t"));
    }
}


const llenarMatriz = function(m) {
    for(let f=0; f < m.length; f++){
        for(let c=0; c < m[f].length; c++){
            m[f][c] = prompt(`Ingrese el dato de la matriz en m[${f}][${c+1}]`)
        }
    }
}


function sumaFilas (m) {
    let vsum = [];
    for(let f=0; f<m.length; f++) {
        //vsum[f] = 0 ;
        //for(let c=0; c<m[f].length;c++) {
        //    vsum[f] += m[f][c];
        //}
        vsum[f] = m[f].reduce((acummulator, element) => {
            return acummulator + element
        });
    }
    return vsum;
}

function sumaCols (m) {
    let vcols = m[0].map(()=> 0);
    for(let f=0; f<m.length; f++) {
        for(let c=0; c<m[f].length;c++) {
            vcols[c] += m[f][c];
        }
    }return vcols
}
//let manga = [["papa", "yuca"],["maiz", "peto"], ["sancocho", "mute"]];
//imprimirMatriz(manga);


/*QUE EL USUARIO INGRESE FILAS Y COLUMNAS*/
//let matriz =[]
//let fil = Number(prompt("Ingrese el número de filas"));
//let col = Number(prompt("Ingrese el número de columnas"));
//matriz = crearMatriz (matriz, fil, col);
//llenarMatriz(matriz);
//imprimirMatriz(matriz);

matriz = [  [4, 6, 9],
            [7, 2, -1],
            [5, 8, 13],
            [2, 0, 8]]; //4x3

let sumFilas = sumaFilas(matriz);
console.log(sumFilas);
let sumCols = sumaCols (matriz);
console.log(sumCols);