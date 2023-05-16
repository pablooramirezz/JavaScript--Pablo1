//import {suma, PI} from './archivo1.js';
//
//console.log(suma(215, 35));
//
//console.log(PI);

import nombre, * as vale from './archivo1.js';
import * as pablo from './archivo3.js';
import {mensaje} from './mensaje.js';


console.log(vale.suma(2, 3));
console.log(vale.PI);
console.log(pablo.factorial(5));
console.log(pablo.PI);
console.log(mensaje());
console.log(vale.spunik.promedad);
console.log(vale.Camper.mensaje());
//Muestra el nombre por defecto del módulo de archivo1.js
console.log(nombre);