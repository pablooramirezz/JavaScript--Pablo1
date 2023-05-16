function solo4(vec) {
    let vecresp = [];
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] <= 4)
            vecresp.push(vec[i]);
    }
    return vecresp;
}

function solo42(vec) {
    let vecresp = [];
    vec.foreach(function (element) {
        if (element.length >= 4)
            vecresp.push(element);
    })
    return vecresp;
}

const solo43 = vec => vec.map(element => {
    if (element.length >= 4)
        return element;
});

const solo44 = vec.filter(function (e) {
    return e.length >= 4;
})


let palabras = { "rosa", "sol", "solar", "per", "perro"}