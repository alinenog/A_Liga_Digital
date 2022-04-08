const http = require('http');
const url = require('url');

const hotsname = '127.0.0.1'; // ou  localhost
const port = 3000; //8080

const server = http.createServer((requisicao, resposta) => {
    const urlAnalise = url.parse(requisicao.url, true);
    const parametrosConsulta = urlAnalise.query;

    console.log(requisicao.url);
    if (requisicao.url.startWith('/bye')){
        resposta.statusCode = 200;
        resposta.setHeader('content-Type', 'text/plain');
        resposta.end(`Tchau`);
        return;
    } else if(requisicao.url.startWith('/hello')){
    resposta.statusCode = 200;
    resposta.setHeader('content-Type', 'text/plain');
    resposta.end(`Hello ${parametrosConsulta.nome} ${parametroConsulta.sobrenome}`);
    return;    
    }

    resposta.statusCode = 404;
    resposta.setHeader('Content-Type','text/plain');
    resposta.end(`Pagina nao encontrada ${requisicao.url}`);
});

server.listen(port, hotsname, () => {
    console.log(`Server running at http://${hotsname}:${port}/`);
});