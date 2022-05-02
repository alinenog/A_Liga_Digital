//Arquivo classe ligado ao carro 
//Aula 18 Programação Orientada a Objeto

const Carro = require('./carro')

let fusca = new Carro("VW", "Fusca", "Azul", "1980");
console.log(JSON.stringify(fusca));

fusca.descrever();
fusca.ligar();
fusca.situacao();
fusca.acelerar();
fusca.situacao();
fusca.acelerar();
fusca.acelerar();
fusca.situacao();
fusca.frear();
fusca.situacao();
fusca.frear();
fusca.frear();
fusca.frear();
fusca.situacao();
fusca.ligar();