

//*** Callbacks */

function calcular(datoA, datoB, sumarCB, restaCB) {
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restaCB(restar);
}

calcular(2, 3, function(resultado) {
    console.log('Suma', resultado)
}, function(resultado) {
    console.log('Resta', resultado)
})

//calcular(d1,d2, func, func);