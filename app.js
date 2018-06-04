var http = require("http");

const server = http.createServer(function (request, response) {
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    if (request.url == '/') {
        response.end('<h1>Início</h1>')
    }
    else if (request.url == '/contato') {
        response.end('<h1>Contato')
    }
    else if (request.url == '/sobre'){
        response.end('<h1>Sobre</h1>')
    }
    else{
        response.statusCode = 404;
        response.end('<h1>Not found!</h1>')
    }
    
});


server.listen(4000);