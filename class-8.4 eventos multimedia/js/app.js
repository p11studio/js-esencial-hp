"use strict"

//*** Eventos multimedia */

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function() {
    console.log('El video se ha iniciado')
});

video.addEventListener('seeking', function() {
    console.log('El video se ha iniciado', this.currentTime);
});

video.addEventListener('ended', function() {
    console.log('El video se ha terminado')
});