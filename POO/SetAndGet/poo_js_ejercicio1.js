let vProductos = [];
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    let codigo = Number(document.getElementById("codigo").value);
    let precio = Number(document.getElementById("precio").value);
    let cantidadB = Number(document.getElementById("cantidadB").value);
    let cantidadM = Number(document.getElementById("cantidadM").value);
    const prd = new Producto(codigo, precio, cantidadB, cantidadM);
    vProductos.push(prd);
  
    let divcards = document.createElement("div");
    if (prd.SolicitarPedido()) {
      divcards.classList.add("roja");
    } else {
      divcards.classList.add("azul");
    }
  
    let titulo = document.createElement("h3");
    titulo.textContent += `Código del producto: ${codigo}`;
    divcards.appendChild(titulo);
  
    let parrafos = document.createElement("p");
    parrafos.textContent += `Precio de compra: ${precio}`;
    parrafos.textContent += `Cantidad en bodega: ${cantidadB}`;
    parrafos.textContent += `Cantidad mínima requerida en bodega: ${cantidadM}`;
    divcards.appendChild(parrafos);
  
    let cartas = document.getElementById("cartas");
    cartas.appendChild(divcards);
  
    codigo = Number((document.getElementById("codigo").value = ""));
    precio = Number((document.getElementById("precio").value = ""));
    cantidadB = Number((document.getElementById("cantidadB").value = ""));
    cantidadM = Number((document.getElementById("cantidadM").value = ""));
  
    console.log(vProductos);
});



class Producto {
  constructor(codigo, precio, cantidadB, cantidadM) {
    this._codigo = codigo;
    this._precio = precio;
    this._cantidadB = cantidadB;
    this._cantidadM = cantidadM;
  }
  //----------------------------------------------------------------------//
  set codigo(nuevoCodigo) {
    this._codigo = nuevoCodigo;
  }
  get codigo() {
    return this._codigo;
  }
  //----------------------------------------------------------------------//
  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }
  get precio() {
    return this._precio;
  }
  //----------------------------------------------------------------------//
  set cantidadB(nuevoCantidadB) {
    this._cantidadB = nuevoCantidadB;
  }
  get cantidadB() {
    return this._cantidadB;
  }
  //----------------------------------------------------------------------//
  set cantidadM(nuevoCantidadM) {
    this._cantidadM = nuevoCantidadM;
  }
  get cantidadM() {
    return this._cantidadM;
  }
  //METODO
  SolicitarPedido() {
    if (this._cantidadB < this._cantidadM) {
      return true;
    } else {
      return false;
    }
  }
}
