// como se gestiona la asincronia en un proceso

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, '+nombre);
        otroCallback();
    }, 1000);
}

// anidando llamado de funciones asincronas
console.log('INICIANDO PROCESO...');
hola('Oscar', function(nombre) {
    adios(nombre, function() {        
        console.log('TERMINANDO PROCESO...');
    })
});


/* ==================================================================================== */
