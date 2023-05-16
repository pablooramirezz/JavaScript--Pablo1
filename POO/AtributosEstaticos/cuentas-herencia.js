class Cuenta {
    static cantidad = 0;

    constructor(numero, nombre, saldo =0) {
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;

        ++Cuenta.cantidad;
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
        this._nombre = nuevoNombre;
    }
    get nombre() {
        return this._nombre;
    }
//-----------------------------------------------------//
    set saldo(nuevoSaldo) {
        this._saldo = nuevoSaldo;
    }
    get saldo() {
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

class CuentaAhorro extends Cuenta {

}
let cta = new Cuenta(789, "Mariana", 500_000)

let ctAh1 = new CuentaAhorro(564, "Pablo", 120_000);
ctAh1.depositar(50_000);
console.log(ctAh1.consultarSaldo());
console.log(CuentaAhorro.cantidad);

class CuentaCorriente extends Cuenta {
    constructor(numero, nombre, saldo = 0, topeCredito) {
        super(numero, nombre, saldo);

        this._topeCredito = topeCredito
        if(this._topeCredito === undefined) {
            this._topeCredito = 0;
        }
    }
//-----------------------------------------------------------//
    set topeCredito(nuevoTope) {
        this._topeCredito = nuevoTope;
    }
    get topeCredito() {
        return this._topeCredito;
    }
//-----------------------------------------------------------//
    girar(monto) {
        let tsaldo = this._saldo;
        tsaldo -= monto;
        if(tsaldo >= -this._topeCredito) {
            this._saldo -= monto;
            return true;
        }
        return false;
    }
}

//let ctaC = new CuentaCorriente(784, "Daniela", 2_000_000,  2_000_000);
//ctaC.girar(2_500_000);
//ctaC.depositar(500_000)
//ctaC.girar(7_000_000);
//console.log("saldo: ",ctaC.consultarSaldo());
//console.log("Cuentas creadas: ", Cuenta.cantidad);
//console.log("Cuentas Corrientes creadas: ", CuentaCorriente.cantidad);
//console.log("Cuentas Ahorros creadas: ", CuentaAhorro.cantidad);
class Persona {
    static cantPersona;

    constructor(tipoPersona, tipoIdentificacion, numeroIdentificacion, nombre,
                telefono, cuenta) {
        this._tipoPersona = tipoPersona;
        this._tipoIdentificacion = tipoIdentificacion;        
        this._numeroIdentificacion = numeroIdentificacion;        
        this._nombre = nombre;        
        this._telefono = telefono;

        this._cuenta = cuenta;
    }
}

let ctaD = new CuentaCorriente(784, 2_000_000,  2_000_000);


let p1 = new Persona("Natural","CC", 1231784, "Pablo", 1124, ctaD);
//console.log(p1._cuenta.consultarSaldo());
p1.cuenta.girar(2_500_000);
p1.cuenta.depositar(500_000);
p1.cuenta.girar(7_000_000);
console.log(p1.cuenta.consultarSaldo());