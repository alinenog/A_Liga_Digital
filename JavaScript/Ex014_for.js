//Aula 16 -FOr
console.log('Estrutura for')

var notas = [];
notas.length = 3

notas.push(10)
notas.push(8)
notas.push(7.8)

for (let index = 0; index < notas.length; index++) {
    console.log('Indice: ' + index + ' Nota -> ' + notas[index])
}