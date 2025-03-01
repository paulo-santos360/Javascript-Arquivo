/* function funcao() {
    console.log('oie')
}
funcao(); */

/* function funcao() {
    console.log(arguments) //[10] pode pegar pela posição do array
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  */
// Não reconhece o Parametro aqui na função, isso so funciona com function ele tem uma funçaõ chamado ARGUMENTS que armazena como um objeto ou array pelo indice

/* function funcao() {
 console.log(arguments) // (arguments) (arguments[0]) pode pegar o indice do array
} */

/* funcao()

funcao('Valor', 1, 2, 3, 4, 5, 6, 7,8 ,9)  */
// executa normal js não aplica os valores os argumentos (arguments) usando esse parametro ele mostra ao onde foi para 

// arguments que sustenta todos os argumentos enviados
/* function funcao() { //(a, b, c)
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total) //(total, a, b, c) vai pegar cada array de acordo com o numero de argumentos
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  */// função somando

/* function funcao(a, b, c, d, e, f) { // Parametros
    console.log(a, b, c, d, e, f) 
}
funcao(1, 2, 3); */ // Argumentos nesse exemplo ele vai manda undefined quando difere numeros de argumentos e parametros 
// Argumentos são os valores que envia para os parametros

/* function funcao(a, b = 2, c = 4) { // (a, b = 2) Maneira nova de resolver ae não coloca o de baixo 
    // b = b || 0; // Maneira antiga de resolver o problema
    console.log(a + b + c) 
}
funcao(2, undefined, 20 )*/ // vai dar NaN pois não e conta aritmetica valida
// se cologar algum valor no argumento no lugar (2, 10) ele assumi o valor do argumento e não do Parametro
// funcao(2, '', 20); ele assumi o valor ta string fazia 
// funcao(2, undefined, 20) a unica maneira dele assumir o valor do parametro e  ,, da erro null ta zero 

// Desestruturação atraves de um objeto
/* function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)

    let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20} // chamando na função como argumento funcao(obj) funciona do msm jeito
}
funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20}) */// objeto literal como argumento da função 

//Desestruturação de Array
/* function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao(['Luiz', 'Miranda', '30']) *///Valores Literais 

// spread operador tem que ser o ultimo parametro ta função
/* function conta(operador, acumulador, ...numeros) {// pode usar ... spread operador tb ao inves de [20, 30, 40, 50] ae tira o []
   // console.log(operador, acumulador, numeros)
   for(let numero of numeros){ // in no lugar do of das o array
   // console.log(numeros)
  // acumulador += numero;
  if (operador === '+') acumulador += numero;
  if (operador === '-') acumulador -= numero;
  if (operador === '/') acumulador /= numero;
  if (operador === '*') acumulador *= numero;
   }
   console.log(acumulador)
}
conta('-', 1, 20, 30, 40, 50) */ // só mudar o sinal do operador 0 fica negativo se começar com outro numero vai dar outro resultado

// spread operador msm função mais com const  
/* const conta = function(operador, acumulador, ...numeros) {// pode usar ... spread operador tb ao inves de [20, 30, 40, 50] ae tira o []
    // console.log(operador, acumulador, numeros)
    for(let numero of numeros){ // in no lugar do of das o array
    // console.log(numeros)
   // acumulador += numero;
   if (operador === '+') acumulador += numero;
   if (operador === '-') acumulador -= numero;
   if (operador === '/') acumulador /= numero;
   if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
 };
 conta('-', 1, 20, 30, 40, 50)  */

 // Spread op com arguments funciona do msm jeito
 /* const conta = function(operador, acumulador, ...numeros) { 
    console.log(arguments)
 };
 conta('-', 1, 20, 30, 40, 50) */ 

 // não tem arguments com arrow function
/*  const conta = (operador, acumulador, ...numeros) => { 
    console.log(arguments) // (operador, acumulador, numeros) funciona do msm jeito
 };
 conta('-', 1, 20, 30, 40, 50) */ 

 // Jeito Novo com ... Spread Operador
 const conta = (...args) => {
    console.log(args);
 }
 conta('-', 1, 20, 30, 40, 50) 