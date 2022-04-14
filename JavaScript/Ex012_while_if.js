//Aula 16 - If dentro do While
var numero = 10

while (numero >= 0) {
    if( numero != 0) {
        switch((numero % 2) == 0 ){
        case true:
            console.log(numero + ' -> PAR')
            break;
        case false:
            console.log(numero + ' -> IMPAR')
            break;
        default:
            console.log('Número não identificado');       
            break;     
        }
  } 
    numero -= 1
} 