//Modulos
const http = require('http');
const colors = require('colors');

//Creamos el servidor
const gestorServer = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola soy un Chanchito Feliz :)</h1>');
    res.end();
};

//Puerto de acceso al servidor
const server = http.createServer(gestorServer);

server.listen(3000, () => {
    console.log('Servidor activo en el Puerto 3000 -> localhost:3000'.red);
});