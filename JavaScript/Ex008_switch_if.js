//Aula 16 - Switch Case dentro do if
var nome = "Aline";

if( true) {
    switch(nome){
        case 'Tiago':
        case 'Alex':
        case 'Leonardo':
            console.log(nome + ' -> aprendiz de professor')
            break;
        case 'Cris':
        case 'Hele':
            console.log(nome + ' -> chefe da Liga Digital')
            break;
        default:
            console.log(nome + ' -> aluno(a) do Vem.Ser=dev')
            break;                    
        }
}