//Aula 20 Express
//Instrutor: Alex

const express = require('express');
const { listen } = require('express/lib/application');
const app = express()
const port = 3000;

app.get('/hello', (requisicao, resposta) =>{
    console.log(requisicao.query);
    const nome = requisicao.query.nome;
    const sobrenome = requisicao.query.sobrenome || '';

    resposta.send(`Hello ${nome} ${sobrenome}`)
});

app.get('/bye', (requisicao,  resposta) => {
    resposta.send('Tchau');
});


//colocar a conta sala  linha 29 a 55
//const sala = []

//linha 57 adiante
app.get('/busca', (requisicao, resposta) => {
    const termoBusca = requisicao.query.nome.toLowerCase();
    let resultados = [];

    for(let indice = 0; indice < sala.length; indice ++){
        if(sala[indice].nome.toLowerCase().includes(termoBusca)){
            resultados.push(sala[indice]);
        }
    } 

    if(resultados.length == 0){
        return resposta.status(404).send('Nenhum aluno encontrado');
    }

    return resposta.send(resultados);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})


