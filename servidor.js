const http = require('http');


const hostname = '127.0.0.1'
const porta = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando em  http://" ${hostname}:${porta}/`);
});
