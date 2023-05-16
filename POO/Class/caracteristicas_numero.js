class CaracteristicasNumero {
    constructor(numero) {
        this.numero = numero; 
    }
    parImpar() {
        if (this.numero%===2){
            console.log("El número es par.");
        }else if (this.numero%!==2) {
            console.log("El número es impar.");
        }
    }
}