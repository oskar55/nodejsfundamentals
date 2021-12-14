/* ========================================================================================= */
/* ================================ CALLBACKS SALVACION ==================================== */

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

function talk(callbackTalk) {
    setTimeout(function() {
        console.log('balbalblablablablablablab .... ');
        callbackTalk();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    
    talk(function () {
       conversacion(); 
    });
}


// -- PROCESO PRINCIPAL
console.log('INICIANDO PROCESO...');
hola('Oscar', function(nombre) {
    
    talk(function() {        
        talk(function() {        
            talk(function() {        
                adios(nombre, function() {        
                    console.log('TERMINANDO PROCESO...');
                });
            });
        });
    });

});

/* ========================================================================================= */