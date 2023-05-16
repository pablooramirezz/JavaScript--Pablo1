function enviarTabla() {
    let nombre = document.getElementById("nombre").value;
    let lun = parseInt(document.getElementById("lun").value);
    let mar = parseInt(document.getElementById("mar").value);
    let mier = parseInt(document.getElementById("mier").value);
    let jue = parseInt(document.getElementById("jue").value);
    let vie = parseInt(document.getElementById("vie").value);
    let sab = parseInt(document.getElementById("sab").value);


    let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    let fila = tabla.insertRow();

    const celdaNombre = fila.insertCell(0);
    celdaNombre.innerHTML = nombre;

    const celdaLun = fila.insertCell(1);
    celdaLun.innerHTML = lun;

    const celdaMar = fila.insertCell(2);
    celdaMar.innerHTML = mar;

    const celdaMier = fila.insertCell(3);
    celdaMier.innerHTML = mier;

    const celdaJue = fila.insertCell(4);
    celdaJue.innerHTML = jue;

    const celdaVie = fila.insertCell(5);
    celdaVie.innerHTML = vie;

    const celdaSab = fila.insertCell(6);
    celdaSab.innerHTML = sab;

    const celdaTot = fila.insertCell(7);
    celdaTot.innerHTML = lun + mar + mier + jue + vie + sab;

    document.getElementById("nombre").value = "" ;
    parseInt(document.getElementById("lun").value = "");
    parseInt(document.getElementById("mar").value ="");
    parseInt(document.getElementById("mier").value ="");
    parseInt(document.getElementById("jue").value ="");
    parseInt(document.getElementById("vie").value ="");
    parseInt(document.getElementById("sab").value ="");
}