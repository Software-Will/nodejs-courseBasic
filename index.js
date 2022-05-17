const os = require('os'); //Modulo que nos da los datos del SO
const fs = require('fs'); //Modulo de archivos

/*console.log(os.platform());
console.log(os.release());
console.log('freemem: ', os.freemem());
console.log(`totalmem: ${os.totalmem()} bytes`);
*/

//Crear archivo -> Codigo Asincrono o Async
fs.writeFile('./texto.txt', 'linea 1', (err) => {
    if (err) {
        console.log(err);
    }//Controlamos el error
    console.log('Archivo creado');
});//Node js delega las tareas para que el codigo pueda seguir ejecutandose

console.log("Continua la ejecucion");

//

//Eliminar archivo