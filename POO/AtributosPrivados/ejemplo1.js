class Persona {
    #nombre;
    #sexo;
    constructor(nombre, sexo) {
        this.#nombre = nombre;
        this.#sexo = sexo;
    }
//-----------------------------------------------------------//
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get nombre() {
        return this.#nombre;
    }
//-----------------------------------------------------------//
    set sexo(sexo) {
        this.#sexo = sexo;
    }
    get sexo() {
        return this.#sexo;
    }
}

let p1 = new Persona("Valerie", "F");
console.log(p1);
p1.nombre = "Valerye"
console.log(p1);
