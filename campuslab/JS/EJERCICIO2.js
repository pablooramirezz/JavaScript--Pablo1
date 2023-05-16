


let mayorElemVector = (vector) =>{
    if (vector.length ===0)
        return null;

    let mayor = vector[0]
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > mayor)
            mayor = vector[i]
    }
    return mayor
}

let v = ["15", "Ana", "Carlos", "251", "Abril", "Zafiro"]
console.log(mayorElemVector(v))