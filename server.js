const http = require('http'); //Protocolo de comunicacion http - Modulo
const colors = require('colors'); //Modulo instalado desde npm - npm install colors

/*http.createServer((req, res) => {//request, response
    res.writeHead(200, { 'Content-type': 'text/html' }); //Tipo de respuesta 
    res.write('<h1>Esto es un simple texto</h1>');
    res.end();
}).listen(3000);*/ //Listen: Para determinar el puerto

//localhost:3000 -> aca visualizo

//Codigo refactorizado

const handleServer = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Chanchito Feliz :)</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, () => {
    console.log('Server on port 3000'.red);
});

//npm Node Packagement Managment

//npm init
//npm install, leera el package.json

/*
"scripts": {
    "start": "node server.js" //Inicialza el proyecto con este modulo al instanciar <npm start>
  },
*/

/*
 "scripts": {
    "start": "node server.js",
    "desarrollo": "node server.js"
  }, //Se ejecuta con npm run desarrollo
*/

//npm install = npm i
//npm install express