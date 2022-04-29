//Aula 17

//Inteiros - numeros sem pontos decimais
var idade = 37 
console.log ("Idade(inteiro) : " + idade)
console.log()

//Ponto flutuante(reais)- numeros com casas decimais
var altura = 1.7432
console.log('Altura(real): '+ altura.toFixed(2)) //toFixed coloca 2 pontos apos a virgula
console.log()

var dataNascimento = new Date(1984, 3, 27, 10,35,0, 0)
console.log('Data Nascimento (datetime)' + dataNascimento)
console.log()

var notas = [ 6.75, 9, 8.45]
console.log('notas (array)' + notas)
console.log('notas (array) tamanho ' + notas.length)
console.log()

var nome = '@line Nogueira'
console.log('Nome (string) ' + nome)
console.log('Tamanho do nome: ' + nome.length)
console.log('Posição do @ no nome: ' + nome.indexOf("@",0))
console.log('Posição do N no nome: ' + nome.indexOf("N",0))
console.log('Replace N por 4: ' + nome.replace("N","4"))
console.log('Tamanho do nome: ' + nome.toLowerCase())