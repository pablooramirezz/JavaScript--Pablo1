class CuentaCorriente {
    
    static cantidad = 0;
    constructor(numero, nombre, saldo =0) {
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;

        ++CuentaCorriente.cantidad;
    }
//-----------------------------------------------------//
    set numero(nuevoNumero) {
        this._numero = nuevoNumero;
    }
    get numero() {
        return this._numero;
    }
//-----------------------------------------------------//
    set nombre(nuevoNombre) {
        console.log("SET nombre");
        this._nombre = nuevoNombre;
    }
    get nombre() {
        console.log("GET nombre");
        return this._nombre;
    }
//-----------------------------------------------------//
    set saldo(nuevoSaldo) {
        this._saldo = nuevoSaldo;
    }
    get saldo() {
        console.log("GET saldo");        
        return this._saldo
    }
//-----------------------------------------------------//
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
        return this._saldo;
    }

    static nombreBanco() {
        return "Campus Bank";
    }
}

const ctA = new CuentaCorriente(1234, "Juan", 350_000);
const ctB = new CuentaCorriente(9876, "María", 450_600);

console.log(CuentaCorriente.cantidad);
console.log(CuentaCorriente.nombreBanco());

ctA.