const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'application/json' });

    let output = {
        name: 'Ruben',
        age: 36,
        url: req.url
    };
    res.write(JSON.stringify(output));
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');