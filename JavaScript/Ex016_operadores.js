//Aula 17
console.log('Operadores')
soma = 3 + 3 
console.log('3 + 3 = ' + soma)

subtracao = 4 - 3
console.log('4 - 3 = ' + subtracao) 

multiplicacao = 4 * 3
console.log('4 * 3 = ' + multiplicacao) 

divisao = 4 / 3
console.log('4 / 3 = ' + divisao) 

console.log()
console.log('----------------------------------------------')
var nomes = ['Aline', 'Luiz', 'Thales', 'Samira', 'Edna', 'Vinicius', 'Leopoldo', 'Marlisson']

nomes = nomes.sort()

for(let index = 0; index < nomes.length; index++){
    console.log('Posição do Array ' + index)
    console.log('Conteudo na posição do Array: ' + nomes[index])
    console.log()
}