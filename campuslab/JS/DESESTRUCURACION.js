let v = ["uno",  "dos", "tres", "cuatro"]
let x = ["lun", "mar", "mier", "juev"]

function prueba([param1, param2, otros1], [param3, otros2]) {
    console.log(`primera entrada ${param1} ${param2} ${otros1}`);
    console.log(`primera entrada ${param3} ${otros2}`);
}
prueba(v,x);


const vector = [1, [2, 3], 4];
const [a, b, c] = vector;
console.log(b);
console.log(c);


const vector = [1, [2, 3], 4];
const [a, ...b] =vector;
console.log(b);


const vector = [1, [2, 3], 4];
const [...f] = vector;
console.log(f)


const vector = [1, [2, 3], 4];
const [g,,h] = vector;
console.log(g);
console.log(h);


let [saludo,,,nombre] = ["Hola", "Yo", "Soy", "Sarah"];
console.log(saludo);
console.log(nombre);


