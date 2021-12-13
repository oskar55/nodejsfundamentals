console.log('pruebas');


// mantener el EventLoop abierto sin parar
setInterval(function () {
    console.log('pruebas eternas en tiempo');
}, 1000);

//ejemplo de que la instruccion asincrona continuara
console.log('otra instuccion');

// ================= ALERT
// el problema de trabajar monohilo con ayuda del eventloop es 
// que si se detiene un proceso dentro de un setInterval por ejemplo hara que todo SE DETENGA