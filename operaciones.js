const fs = require('fs')

const registrar = (archivo, nombre, edad, animal, color, enfermedad) => {
    // leer archivo JSON -> arreglo
    const arrayCita = fs.readFileSync(archivo, 'utf-8')
    // arreglo -> json
    const citasTotal = JSON.parse(arrayCita)
    // agregar dato
    citasTotal.push(
        {
            nombre: nombre,
            edad: edad,
            animal: animal,
            color: color,
            enfermedad: enfermedad
        }
    )
    // guardar todas las citas (antiguas + nuevas)
    fs.writeFileSync(archivo, JSON.stringify(citasTotal, null, 2))
}

const leer = (archivo) => {
    const contenidoTotal = fs.readFileSync(archivo,'utf-8')
    console.log(contenidoTotal)    
}

module.exports = { registrar, leer }
