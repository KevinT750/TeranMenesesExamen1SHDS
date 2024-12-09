var http = require("http");
var server = http.createServer();

function mensaje(req, resp) {
    if (req.url == '/teran') { 
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        resp.write('Kevin Steveen Teran Meneses, 20 añios, estudiante de Desarrollo de Software, Me gusta la tecnologia y la programacion.');
    } else {
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
        resp.write('Pagina no encontrada.');
    }
    resp.end();
}

server.on('request', mensaje);
server.listen(3000, function () {
    console.log('El servidor esta ejecutandose en el puerto 3000. Accede a http://localhost:3000/teran');
});

//Codigo Adaptado del video de https://youtu.be/_1xa8Bsho6A