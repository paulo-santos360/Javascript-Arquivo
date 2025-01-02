// Filter -> Sempre retorna um array, com a mesma quantidade de elementos
// ou menos conforme fitrar

// Retorne os números maiores que 10
//  indice       0   1 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// ArrowFunction
/* const numerosFiltrados = numeros.filter((valor) => { // pode eliminar () funciona do msm jeito
    return valor > 10;
}) */

// ArrowFunction
/* const numerosFiltrados = numeros.filter((valor, indice, array) => { 
    console.log(valor, indice, array)// por partes faz um for 
    return valor > 10;
})  */

//console.log(numerosFiltrados) 

// Função callback acredite se quiser 
//const numerosFiltrados = numeros.filter(valor => valor > 10)

//console.log(numerosFiltrados)

// Função Anonima
/*  const numerosFiltrados = numeros.filter(function(valor) {
    return valor > 10;
}) */

// console.log(numerosFiltrados) 

/* function callbackFilter(valor, indice, array){ 
     if (valor > 10) {
        return true;
    } else {
        return false
    } 
} */ //caminho mais longo

/* function callbackFilter(valor){
    return valor > 10;
}  */ // caminho menor

//const numerosFiltrados = numeros.filter(callbackFilter);
//console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

// Retorne as pessoas que tem o nome com 5 letras ou mais

// const pessoasComNomeGrade = pessoas.filter(obj => obj.nome.length >= 7);
// console.log(pessoasComNomeGrade)

/* const pessoasComNomeGrade = pessoas.filter(function(obj) {
   // console.log(obj.nome) // acessar o array
   return obj.nome.length >= 5;
}) */
//console.log(pessoasComNomeGrade)


// Retorne as pessoas com mais de 50 anos

// const pessoasComMaisde50 = pessoas.filter(obj => obj.idade >= 50);
// console.log(pessoasComMaisde50)

// Retorne as pessoas cujo nome termina com a

/* const pessoasComLetraA = pessoas.filter( function (obj){
    return obj.nome.toLowerCase().endsWith('a');
 });
console.log(pessoasComLetraA) */

// Arrow Function
const pessoasComLetraA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
 });
console.log(pessoasComLetraA)
