//Aula 16 - switch dentro do while 
var numero = 1 
while (numero < 100){
  //  console.log(numero)

    switch(numero % 2 == 0) {
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
    numero += 1
}    

