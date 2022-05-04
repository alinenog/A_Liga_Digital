//Aula 19 Programação Orientada a Objeto
//Instrutor: Tiago Santos


//Propriedade privada
class Pessoa{
    #nome = "";
    #cpf = "";
    #sexo = "";

    constructor(nome, cpf, sexo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#sexo = sexo;
    }

    obterNome = function(){
        return this.#nome;   
    }
    

    //A unica forma de alterar o nome no objeto pessoa
    alterarNome = function(novoNome){
        this.#nome = novoNome;
    }
}

let tiago = new Pessoa("Tiago", "123.123.123-00","M");
console.log(tiago.nome); //undefined pois não esta visivel abertamente e sim privado
console.log(tiago.obterNome());
tiago.alterarNome("Aline "); //alterando nome no objeto pessoa
console.log(tiago.obterNome());
