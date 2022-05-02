//Aula 18 Programação Orientada a Objeto
//Modelo Objeto 

   
//A função Criar carro, vai criar um objeto com todas essas caracteristicas 
function carro(marca, modelo, cor, ano){
//propriedades do objeto
    this.marca = marca,
    this.modelo = modelo,
    this.cor = cor,
    this.ano = ano,
    this.velocidade = 0,
    this.ligado = false
}    

let ferrariDoTiago = new carro("Ferrari", "F450", "Vermelho", '1990');
let fuscaDoTiago = new carro("VW", "Fusca", "Amarelo", "1974");

//Imprimindo e transformando em um Json
console.log(JSON.stringify(ferrariDoTiago));
console.log(JSON.stringify(fuscaDoTiago));

