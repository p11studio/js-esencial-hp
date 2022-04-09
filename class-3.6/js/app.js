"use strict"

//JSON => Javascript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twittter: 'dcHugo'},
    {nombre: 'Paco', twittter: 'dcPaco'},
    {nombre: 'Luis', twittter: 'dcLuis'},
    persona
]

var personaJSON =  JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);
