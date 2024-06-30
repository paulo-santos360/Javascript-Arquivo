/* var lista_frutas = Array()

lista_frutas[0] = 'Maça'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

//ordena alfanumerica
console.log(lista_frutas.sort()) */

var lista_numeros = Array()

lista_numeros[0] = 12
lista_numeros[1] = 11
lista_numeros[2] = 4
lista_numeros[3] = 6
//msm q os valores sejam string o js faz o cache

//ordena alfanumerica
console.log(lista_numeros.sort(ordenaNumeros))// se for alfabetica não precisa passar a função no parametro

function ordenaNumeros(a, b){
    return a - b
    // <0 = A Ordenado antes de b
    // >0 = B ordenado antes de a
    // == a ordem é mantida
}