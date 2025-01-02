// Reduce reduz o array a 1 elemento e faz map filter reduce com essa função mas não é o ideal

// Some todos os números (Redude)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valoes (map)

// Some todos os números (Redude)
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/* const total = numeros.reduce(function(acumulador, valor, inidce, array) {
    acumulador += valor; // vai somando valor
    // console.log(acumulador, valor)
    return acumulador;
}, 0) */ // [] vai concaterna
// console.log(total) // soma toda de todos os arrays

// Retorne um array com os pares (Filter)
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* const total = numeros.reduce(function(acumulador, valor, inidce, array) {
    if(valor % 2 === 0) acumulador.push(valor) // !== impar multiplos de 8 === 0
    return acumulador;
}, []) */

// console.log(total)

// Retorne um array com o dobro dos valoes (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/* const total = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []) */

// console.log(total)


// Retorne a pessoa mais velha
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Leticia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
  ];

  const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
  })

  console.log(maisVelha)