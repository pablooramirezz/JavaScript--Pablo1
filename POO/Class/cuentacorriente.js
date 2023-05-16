//const CuentaCorrienteA = {
//    numero:1234,
//    nombre:"Juan",
//    saldo:350_000,
//
//    depositar(monto) {
//        this.saldo += monto;
//
//        return true;
//    },
//    girar(monto) {
//        if (this.saldo >= monto)
//            this.saldo -= monto;
//        else
//            return false
//    },
//    consultarSaldo() {
//        return this.saldo;
//    }
//}
//console.log(CuentaCorrienteA.consultarSaldo());
//CuentaCorrienteA.depositar(300_000);
//CuentaCorrienteA.girar(200_000);
//console.log(CuentaCorrienteA.consultarSaldo());
//


//CON CLASES

class CuentaCorriente {
    constructor(numero, nombre, saldo) {
        this.numero = numero;
        this.nombre = nombre;
        this.saldo = saldo;
    }
    depositar(monto) {
        this.saldo += monto;

        return true;
    }
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto;
        else
            return false
    }
    consultarSaldo() {
        return this.saldo;
    }
}

const ctaCrrA = new CuentaCorriente(1234, "Juan", 350000);
const ctaCrrB = new CuentaCorriente(9876, "Maria", 450600);

console.log(ctaCrrA.consultarSaldo());
ctaCrrA.depositar(300_000);
ctaCrrA.girar(200_000);
console.log(ctaCrrA.consultarSaldo());

console.log("-".repeat(30));

console.log(ctaCrrB.consultarSaldo());
ctaCrrB.depositar(300_000);
ctaCrrB.girar(200_000);
console.log(ctaCrrB.consultarSaldo());