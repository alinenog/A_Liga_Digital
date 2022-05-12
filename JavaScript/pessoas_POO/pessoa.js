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

    obterNome = function() {
        return this.#nome;   
    }

    descrever = function() {
        console.log(this.#nome + " - " + this.#cpf) ; 
    }
}    

//Exoportando a classe pessoas
module.exports=Pessoa