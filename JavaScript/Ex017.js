//Aula 17 Reatorando o exercicio 03
const media = 6;

const sala = [
    aluno = {
    nome: "Tiago dos Santos",
    disciplina: "Matemática",
    notas: [6.5, 4.3, 7.1, 5.0]
},
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

for(let index = 0; index < sala.length; index++){
    var aluno = sala[index]
    var somaDasnotas = 0
    for (let indexNota = 0; indexNota < aluno.notas.length; indexNota++){
        somaDasnotas+= aluno.notas[indexNota];
    }
    var mediaAluno = somaDasnotas / 4

mediaAluno = somaDasnotas / 4
//Se media igual ou maior que 6
console.log(`Aluno: ${aluno.nome} - ${aluno.disciplina} - Média Final: ${mediaAluno} - Status ${mediaAluno >= 6 ? 'Aprovado' : 'Reprovado'}`)


}
















/*
1º modelo ___________________If comun
if (mediaAluno >= 6){
    apovado = mediaAluno >= 6}

2º modelo ___________________simplificado
aprovado = mediaAluno >=6

2º modelo ___________________ If ternario
var statusAluno = mediaAluno >= 6 ? "Aprovado" : "Reprovado"
*/