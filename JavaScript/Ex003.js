//Aula 15 - Calculando Média

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

//console.log('Média: '+ media);
//console.log(sala); // imprime todad sala
//console.log(sala[0]); // imprime o aluno 1 

const aluno1 = sala[0];
const aluno2 = sala[1];

const mediaAluno1 = (aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3]) /4 ;
//console.log('Média aluno 1': + mediaAluno1);
var statusAluno1 = '???';

if (mediaAluno1 < media) { // Se media aluno for menor que  media (6) 
    statusAluno1 = 'Reprovado';
}else { //senao 
    statusAluno1 = 'Aprovado!!!';
}

//console.log(statusAluno1);
console.log(`Aluno: ${aluno1.nome} -  ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);