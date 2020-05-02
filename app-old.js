const http = require('http');



http.createServer(function(req, res) {


    res.writeHead(200, { 'Content-Type': 'text/html' });
    let salida = {
        nombre: 'Jose Arturo',
        edad: 41,
        url: res.url
    }

    res.write(JSON.stringify(salida));
    res.end();


}).listen(8080);