"use strict"

//*** Uso del operador this */

const boton = document.querySelector('.boton');


boton.addEventListener('click', function () {
    console.log("El mouse se ha pulsado");
})

boton.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el boton");
})

boton.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del boton");
})