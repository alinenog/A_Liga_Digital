//Aula 18 Programação Orientada a Objeto
//Modelo Objeto Literal
//Uma classe e composta por propriedades e métodos
//Definindo propriedade e ações do carro e atribuindo a estrutura ao objeto carroDoTiago

let carroDoTiago = {
    //propriedades do objeto 
    marca: "GM",
    modelo:"ONIX",
    cor: "Vermelho",
    ano: 2022,
    velocidade:0,
    ligado:false,

    //ações
ligar:function(){
    console.log("Dando partida no carro...");
    this.ligado = true;
},    

desligar : function(){
    console.log("Desligando o carro...");
},

acelerar : function(){
    console.log("Acelerar Airton ...");
    this.velocidade++;
},

frear : function(){
    console.log("Chiii deu ruim...");
    this.velocidade--;
  }
};

console.log("carro.ligado:" + carroDoTiago.ligado);
carroDoTiago.ligar();
console.log("carrroDoTiago.ligado:" + carroDoTiago);