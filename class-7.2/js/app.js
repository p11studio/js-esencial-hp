"use strict"

//***Estructura basica de una funcion */

function saludar(nombre, edad) {
    console.log('Hola: ',  nombre);
    console.log('Edad: ',  edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Hugo", 40);

console.log(mensaje);