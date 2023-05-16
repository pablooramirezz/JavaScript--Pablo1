//AHORA
const ahora = new Date();
console.log(ahora);
//Thu Apr 20 2023 18:59:30 GMT-0500 (Colombia Standard Time)

//UNA FECHA ESPECIFICADA
//UNA HORA ESPECIFICADA
const randomdate = new Date(2015,3,12,6,25,58);
console.log(randomdate);
//Sun Apr 12 2015 06:25:58 GMT-0500 (Colombia Standard Time)

//UNA FECHA ESPECIFICADA A LA MEDIA NOCHE
const win95 = new Date(1995,7,27);
console.log(win95);
//Sun Aug 27 1995 00:00:00 GMT-0500 (Colombia Standard Time)


//ASIGNAR FECHA
const ahora = new Date();

ahora.setFullYear(2005);//Asigna el año
ahora.setMonth(3);//Asigna Abril
ahora.setDate(17);//Asigna el día

console.log(ahora);

//OBTENIENDO VALORES
const ahora = new Date();
// Todos los metodos empiezan por get
console.log(ahora.getMonth());
// Milisegundos desde el 1 enero 1970
console.log(ahora.getTime());
// Día de la semana (domingo = 0)
console.log(ahora.getDay());

//DATE STRINGS

const ahora = new Date(); 
console.log(ahora.toDateString()); // Thu Apr 20 2023 / FECHA
console.log(ahora.toTimeString()); // 19:11:14 GMT-0500 (Colombia Standard Time) / HORA
console.log(ahora.toLocaleString()); // 4/20/2023, 7:11:14 PM / FECHA Y HORA


// COMPARAR FECHAS
// Del 8 de Octubre 2019 hasta hoy
const now = new Date();
const before = new Date('October 8 2019 16:30:00');
const diff = now.getTime() - before.getTime();
console.log(diff); // 111466035622

// 
const minutes = Math.round(diff / 1000 / 60); // 1857767
const hours = Math.round(minutes / 60); // 30963
const days = Math.round(hours / 24); // 1290

console.log(minutes, hours, days);
console.log(`This post was write ${days} ago`); // This post was write 1290 ago
