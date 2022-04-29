//Aula 16 - Switch
var nome = "Aline"
console.log('Modelo switch Case ________________________________')
switch(nome){
    case 'Tiago':
    case 'Leonardo':
    case 'Alex':    
        console.log(nome + " -> Aprendiz de professor") 
        break;
    case 'Cris':
        console.log(nome + ' -> Chefe da Liga Digital')
        break;
    default:
        console.log(nome + ' -> Aluno do Vem.Ser=Dev') 
        break;                    
    }

console.log()
console.log('Modelo IF ________________________________________')    

if (nome == 'Tiago' || nome == 'Alex' || nome == 'Leonardo'){
    console.log(nome + ' -> aprendiz de professor')
}else if (nome == 'Cris' || nome == 'Hele'){
    console.log(nome + ' -> Chefe da Liga Digital')
}else{
    console.log(nome + ' -> Aluno do Vem.Ser=Dev')
}