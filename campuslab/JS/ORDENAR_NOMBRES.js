let vnombres = [];

function ordenar(){
    let nombre = document.miformulario.nombre.value;


    vnombres.push(nombre);
    vnombres.sort();

    document.miformulario.ordenados.value = vnombres.join("\n"

    document.miformulario.nombre.value = "";

}

function limpiarArea(){
    document.miformulario.ordenados.value = "";
}


let vnombres2 = [];

function ordenar2() {
    let nombre = document.miformulario.nombre.value;

    let vnombres2 = document.miformulario.ordenados.value.slipt("\n");
    vnombres2.push(nombre);
    vnombres2.sort();

    document.miformulario.ordenados.value = vnombres2.join("\n");

    document.miformulario.nombre.value = "";
}   