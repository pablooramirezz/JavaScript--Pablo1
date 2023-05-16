const formulario = document.querySelector("form");
// const formulario = document.getElementById('miform')
formulario.addEventListener("submit", agregarEmpleadoNomina);

/*
    mapEmpleado = {
        cedula: {
            nombre: xxx
            categoria: xxx
            abrcategoria: xxx
            ...
                }
        }

    vEmleados = [{emp1}, {emp2}, {emp3}, ...]
*/

const vEmpleados = [];
const mapTotalNomina = new Map();
const mapEstadistica = new Map();
const salMinimo = 1_160_000;

function agregarEmpleadoNomina(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  try {
    // * Crea un objeto FormData con el formulario
    const datosFormulario = new FormData(formulario);
    //probar la captura de datos
    // console.log("Datos del Formulario:");
    // for (let [elem, valor] of datosFormulario) {
    //   console.log(elem, "-->", valor);
    // }

    // * Capturar la información del formulario
    // y llenar el vector vEmpleados
    capturarInformacion(datosFormulario);
    // console.log("Impresion vEmpleados", vEmpleados);

    // * Calcular Nomina Empleados
    const ultEmpleado = vEmpleados.at(-1);
    calcularNominaEmpleado(ultEmpleado);
    calcularEstadisticaNomina(ultEmpleado);

    // * Agregar empleado a tabla de nomina

    // - Agregar empleados

    // - Modifica totales en el pie de la tabla

    // * publicar y modificar tabla de estadistic
    publicarEstadisticaHTML();

  } catch (ex) {
    console.log("Error: ", ex.message);
    formulario.cedula.focus();
  }

  event.stopPropagation();
}

function capturarInformacion(datosFormulario) {
  const mapEmpleados = new Map();
  const mapDatEmpleados = new Map();

  // validar y agregar cedula al vector datos empleados
  let cedula = datosFormulario.get("cedula");
  if (cedula.length === 0) throw new Error("La cédula no es valida");

  // validar y agregar nombre al vector datos empleados
  let nombre = datosFormulario.get("nombre");
  if (nombre.length === 0) throw new Error("El nombre no es válida");
  mapDatEmpleados.set("nombre", nombre);

  // validar y agragar la categoria
  let abrCategoria = datosFormulario.get("categoria");
  if (abrCategoria === "NN") throw new Error("La cateoria no es valida");

  mapDatEmpleados.set("abrcategoria", abrCategoria);
  mapDatEmpleados.set(
    "categoria",
    formulario.categoria.options[formulario.categoria.selectedIndex].text
  );

  //Agregar los el dic de datos de empledos al mapa de empleados cuya llave es la cedula
  mapEmpleados.set(cedula, mapDatEmpleados);

  //Agregar al vector de empleado el mapa de empeados
  vEmpleados.push(mapDatEmpleados);
}

function calcularSalBrutoBonificacion(ultEmpleado) {
  const mapCategorias = new Map([
    ["AA", [1, 100_000]],
    ["AB", [1.2, 100_000]],
    ["TA", [1.5, 150_000]],
    ["TB", [2, 150_000]],
    ["PA", [2.5, 200_000]],
    ["PB", [3, 250_000]],
    ["DA", [4, 500_000]],
    ["DB", [4.5, 1_000_000]],
    ["GD", [6, 2_000_000]],
    ["GG", [10, 5_000_000]],
  ]);

  const catEmpleado = ultEmpleado.get("abrcategoria");
  // Calcular salario bruto
  const salbruto = mapCategorias.get(catEmpleado)[0] * salMinimo;
  // Calcurlar bonificacion
  const bonificacion = mapCategorias.get(catEmpleado)[1];

  if (salbruto === NaN) {
    ultEmpleado.set("salbruto", 0);
    ultEmpleado.set("bonificacion", 0);
    console.log(ultEmpleado);
    throw new Error("Ha ocurrido un error al calcular el salario bruto del empleado");
  }
  ultEmpleado.set("salbruto", salbruto);
  ultEmpleado.set("bonificacion", bonificacion);
}

function calcularAuxTx(ultEmpleado) {
  const salbruto = ultEmpleado.get("salbruto");

  if (salbruto < 1.5 * salMinimo) ultEmpleado.set("auxtx", 400_000);
  else ultEmpleado.set("auxtx", 0);
}

function calcularEPSPension(ultEmpleado) {
  const salbruto = ultEmpleado.get("salbruto");
  const eps = salbruto * 0.04;
  const pension = salbruto * 0.04;

  ultEmpleado.set("eps", eps);
  ultEmpleado.set("pension", pension);
}

function calcularSalarioNetoTotalizar(ultEmpleado) {
  const salbruto = ultEmpleado.get("salbruto");
  const auxtx = ultEmpleado.get("auxtx");
  const bonificacion = ultEmpleado.get("bonificacion");
  const eps = ultEmpleado.get("eps");
  const pension = ultEmpleado.get("pension");

  // calcular salario neto
  ultEmpleado.set("salneto", salbruto + auxtx + bonificacion - eps - pension);

  // totalizar nomina
  for (let llave of ultEmpleado.keys()) {
    if (mapTotalNomina.has(llave))
      mapTotalNomina.set(
        llave,
        mapTotalNomina.get(llave) + ultEmpleado.get(llave)
      );
    else mapTotalNomina.set(llave, ultEmpleado.get(llave));
  }

  mapTotalNomina.delete("nombre");
  mapTotalNomina.delete("categoria");
  mapTotalNomina.delete("abrcategoria");
}

function calcularNominaEmpleado(ultEmpleado) {
  if (calcularSalBrutoBonificacion(ultEmpleado) === false) return false;

  if (calcularAuxTx(ultEmpleado) === false) return false;

  if (calcularEPSPension(ultEmpleado) === false) return false;

  if (calcularSalarioNetoTotalizar(ultEmpleado) === false) return false;

//   console.log(vEmpleados);
//   console.log(mapTotalNomina);
}

function calcularEstadisticaNomina(ultEmpleado) {
  // cant empleados
  mapEstadistica.set("cantempl", vEmpleados.length);

  const nombre = ultEmpleado.get("nombre");
  const salneto = ultEmpleado.get("salneto");

  // empleado mas gana
  console.log("entro0", mapEstadistica);
  if (mapEstadistica.has("emplmasgana")) {
    console.log("entro1", mapEstadistica);
    if (salneto > mapEstadistica.get("emplmasgana")[1]) {
      console.log("entro2", mapEstadistica);
      mapEstadistica.set("emplmasgana", [nombre, salneto]);
      console.log("entro3", mapEstadistica);
    }
  } else mapEstadistica.set("emplmasgana", [nombre, salneto]);

  // empleado menos gana
  if (mapEstadistica.has("emplmenosgana")) {
    if (salneto < mapEstadistica.get("emplmenosgana")[1])
      mapEstadistica.set("emplmenosgana", [nombre, salneto]);
  } else mapEstadistica.set("emplmenosgana", [nombre, salneto]);

  // sumatoria nomina
  if (mapEstadistica.has("totalnomina")) {
    mapEstadistica.set(
      "totalnomina",
      salneto + mapEstadistica.get("totalnomina")
    );
  } else mapEstadistica.set("totalnomina", salneto);

  // promedio de nomina
  mapEstadistica.set(
    "promnomina",
    mapEstadistica.get("totalnomina") / mapEstadistica.get("cantempl")
  );
}

function publicarEstadisticaHTML() {
  document.getElementById("est-cant-empl").textContent =
    mapEstadistica.get("cantempl");

  // publicar empleado que menos gana
  let nombre = mapEstadistica.get("emplmenosgana")[0];
  let salario = Math.round(mapEstadistica.get("emplmenosgana")[1]);
  document.getElementById(
    "est-empl-menosgana"
  ).textContent = `${nombre} ($${salario})`;

  // promedio nommina
  let prom = Math.round(mapEstadistica.get("promnomina"));
  document.getElementById("est-prom-nomina").textContent = `$${prom}`;

  // publicar empleado que mas gana
  nombre = mapEstadistica.get("emplmasgana")[0];
  salario = Math.round(mapEstadistica.get("emplmasgana")[1]);
  document.getElementById(
    "est-empl-masgana"
  ).textContent = `${nombre} ($${salario})`;

  // Total de la nomina
  let total = Math.round(mapEstadistica.get("totalnomina"));
  document.getElementById("est-total-nom").textContent = `$${total}`;
}
