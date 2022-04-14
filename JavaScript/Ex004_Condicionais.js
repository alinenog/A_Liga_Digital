//Aula 16 - Controle de lâmpadas
const lampadaDoQuarto = true
const lampadaDaSala = true

console.log(' Inicio &&  ---------------------------------')

if ((lampadaDoQuarto === false) && (lampadaDaSala === false)){
    console.log('Estamos no escuro, ligue as lâmpadas do quarto e da sala!')
}else if (lampadaDoQuarto === false && lampadaDaSala === true){
    console.log('Ligue a lâmpada do quarto, pois a lâmpada da sala já está acessa!')
}else if (lampadaDoQuarto === true && lampadaDaSala === false){
    console.log('Ligue a lâmpada da sala, pois a lâmpada do quarto já está acessa!')
}else{
    console.log('Todas as lâmpadas acessas!')
}

console.log()
console.log('Inicio || ---------------------------------')

if ((lampadaDoQuarto === false) || (lampadaDaSala === false)){
    console.log('Estamos no escuro, ligue as lâmpadas do quarto e da sala!')
}else if (lampadaDoQuarto === false || lampadaDaSala === true){
    console.log('Ligue a lâmpada do quarto, pois a lâmpada da sala já está acessa!')
}else if (lampadaDoQuarto === true || lampadaDaSala === false){
    console.log('Ligue a lâmpada da sala, pois a lâmpada do quarto já está acessa!')
}else{
    console.log('Todas as lâmpadas acessas!')
}