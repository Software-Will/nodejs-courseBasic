const express = require('express'); //Modulos
const colors = require('colors');

const server = express(); //Ya crea un servidor

//Cuando le pida la ruta principal, se tiene que ejecutar esto
server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con Express y NodeJS</h1>');
});

//Puerto de ejecucion
server.listen(3000, () => {
    console.log('Server on port 3000'.red); //Por consola
});