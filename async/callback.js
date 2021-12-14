// como se gestiona la asincronia en un proceso

function funcionAsincrona(miCallback) {
    setTimeout(function() {
        console.log('PROCESO ASINCRONO... cd/ 1seg ');
        miCallback();
    }, 1000)
}

console.log('INICIANDO PROCESO...');

// detectar el final del proceso asincrono creando un callback 
// como parametro dentro de "funcionAsincrona" en forma de funcion y asi y llamarlo dentro de la funcion anterior
funcionAsincrona(function() {
    console.log('TERMINANDO PROCESO...');
});
