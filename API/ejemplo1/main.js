import cargarTexto from './cargartexto.js'

const cargartxt = document.getElementById('cargartxt');
const btnCargarTxt =  document.getElementById('btntexto');

btnCargarTxt.addEventListener("click", (e) => {
    cargarTexto(cargartxt);

    e.stopPropagation();
});

function cargarTexto(elemHTML) {
    fetch("datos.csv")
    .then(datos => datos.text())
    .then(data => {
        console.log(data);
        elemHTML.innerHTML = data;
    })
}

const btnCargarJSON = document.getElementById("btnjson");
const tblBody = document.getElementById("dattable");

btnCargarJSON.addEventListener("click", (e) => {
    cargarJSON(tblBody);

    e.stopPropagation();
});

function cargarJSON(elemHTML) {
    fetch("datos.json")
    .then(response => response.json())
    .then(datos => {
        console.table(datos);
        builTable(elemHTML,datos);
    });
}

function builTable(elemHTML,datos) {
    let filas = "";
    for(let valor of datos) {
        filas += `
            <tr>
                <td>${valor.NOMBRE}</td>
                <td>${valor.EQUIPO}</td>
                <td id="tbledad">${valor.EDAD}</td>
                <td id="tblimg">
                    <img scr= ${valor.SEXO ==="M" ? "hombre.png" : "mujer.png"} 
                    alt="Camper">
                </td>
            </tr>
            `
    }
    elemHTML.innerHTML = filas;
}