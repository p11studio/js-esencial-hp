"use strict"

//*** Parametros SPREAD */

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2);
    console.log('Ingrediente 3: ', ingrediente3);
    console.log('Otros: ', otros);
    
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");
