try {
    throw "Lanzando una excepción";
}catch (ex) {
    console.log("Capturando la excepción");
}

try {
    let str;
    str.length;
}catch (ex) {
    console.log("Capturando la excepción.", ex);
}

