/* function soma(a, b){
    return a + b
}
console.log(soma(4, 4))// se passar mais parametro o js não aceita mais paramento so se almentar os parametros */

function soma(a, b){
    b = b === undefined ? 0 : b
    return a + b
}
console.log(soma(4, 4))// se passar mais parametro o js não aceita mais paramento so se almentar os parametros
console.log(soma(3,3,4,5));//desconsidera os parametros adicionais
console.log(soma(7));