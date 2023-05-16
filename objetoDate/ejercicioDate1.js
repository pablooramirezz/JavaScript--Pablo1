//const validar = document.getElementById("validar");
//validar.addEventListener("click", calcularMulta);

function calcularMulta() {
    multa = 0;
    const pactada = document.getElementById("pactada");
    const real = document.getElementById("real");

    const fechaPactada = pactada.value;
    const fechaReal = real.value;

    const fechaPac = new Date(fechaPactada);
    const fechaRea = new Date(fechaReal);


    const diferencia = fechaRea.getDate() - fechaPac.getDate();
    console.log(diferencia);
    
    if (diferencia <= 3) {
        multa = diferencia * 7000
    }else if (diferencia >= 4) {
        multa = diferencia * 10000 + " Nota: Tienes una sanción por 6 meses, no puedes rentar un libro durante este tiempo."
    }
    
    document.getElementById("retraso").innerHTML = diferencia;
    document.getElementById("multa").innerHTML= multa;

}