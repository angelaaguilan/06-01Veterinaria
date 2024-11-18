const { registrar, leer } = require("./operaciones.js");
const archivo = `./data/citas.json`;

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

const nombre = argumentos[1];
const edad = argumentos[2];
const animal = argumentos[3];
const color = argumentos[4];
const enfermedad = argumentos[5];

if (operacion === "registrar") {
  registrar(archivo, nombre, edad, animal, color, enfermedad);
} else {
  if (operacion === "leer") {
    leer(archivo);
  } else {
    console.log("Operación no es correcta");
  }
}
