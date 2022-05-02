"use strict"

//*** Temporizadores o Timers */

//setInterval
//setTimeout

var temporizador = setInterval(function () {
    setColor();
}, 1000);

// setTimeout(function () {
//     setColor();
// }, 1000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "yellow" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador)
}

