//Aula 16 - Switch Case
var numero = 17

var resto = numero % 2
console.log(resto)

switch (resto){
    case 0:
        console.log('NUMERO PAR')
        break;
    default:
        console.log('NUMERO IMPAR')
        break;
}