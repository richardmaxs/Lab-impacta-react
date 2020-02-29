const http = require('http');


const requisicao = function(request, response){
    response.writeHead(200, { "Content-Type" : "text/html" });
    response.write("<h1>Bem vindo ao nosso http server</h1>");
    response.end();
}

const server = http.createServer(requisicao);

const callback = function(){
    console.log('Servidor no ar');
}

server.listen(3000, callback);