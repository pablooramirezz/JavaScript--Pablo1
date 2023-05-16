function crearMatriz(matriz, fil, col) {
    for (let i=0; i<fil; i++)
        matriz[i] = new Array(col);

    return matriz
}


function imprimirMatriz(matriz) {
    for(let f=0; f < matriz.length; f++) {
        let fila = "";
        for(c=0; c<matriz[f].length; c++) {
            fila += matriz[f][c] + "\t\t";
        }console.log(fila);
    }
}


const llenarMatriz = function(m) {
    for(let f=0; f < m.length; f++){
        for(let c=0; c < m[f].length; c++){
            m[f][0] = prompt(`ID del empleado ${f+1}`)
            m[f][1] = prompt(`Nombre del empleado ${f+1}`)
            m[f][2] = prompt(`Salario del empleado ${f+1}`)
        }
    }
}


function sumaFilas (m) {
    let vsum = [];
    for(let f=0; f<m.length; f++) {
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

function encontrarMayorSalario(matriz) {
    let valorMayor = matriz[0][2]
    let position = 0;
    for (let f=1; f < matriz.length; f++)
        if (matriz[f][2] > mayorValor) {
            mayorValor = matriz[f][2]
            position = f;
        }
        return [f, valorMayor]
}

let matriz =[];
let filas = Number(prompt("Cantidad de empleados: "))
matriz = crearMatriz(matriz, filas, 3);
llenarMatriz(matriz);
let mySalario = encontrarMayorSalario(matriz);
console.log("El ID con el salario más alto es: ", matriz[maySalario[0]][0])
console.log("El Empleado con el salario más alto es: ", matriz[maySalario[0]][1])
console.log("El Salario con el salario más alto es: ", matriz[maySalario[0]][2])