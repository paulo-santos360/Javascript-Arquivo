// 
//const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
// nomes.splice(4, 1); // indice primeiro e depois elementos que vai remover
//console.log(nomes);

// diferença de negativo de positivo inverte o começo 
// positivo      0        1        2         3          4
// negativo       -5      -4       -3        -2         -1
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];


//const removidos = nomes.splice(-2, Number.MAX_VALUE); // vai remover do maior numero 
//console.log(Number.MAX_VALUE) // Maior numero que pode existir em JAVASCRIPT
//const removidos = nomes.splice(4, 1); // (3, 2); // PODE PASSAR 0 TB (-2, 0) REMOVER NADA
//const removidos = nomes.splice(3, 0, 'Luiz'); // vai adicionar no indice 3
// const removidos = nomes.splice(3, 1, 'Luiz'); // adiciona Luiz e remove o numero segundo do array pode adicionar depois
//  da virgula mais nomes

// pop simular se colocar (-1, 1) faz a msm função que o pop
// const removidos = nomes.splice(-1, 1);

// shift
//const removidos = nomes.splice(0, 1); // vai perder a Maria

// PUSH SIMULAR
//nomes.splice(5, 0, 'Luiz')//ou (nomes.length, 0, 'Luiz') // tem que tirar o removido do console.log

// Unshift
//nomes.splice(0, 0, 'Luiz', 'Otavio');
//console.log(nomes)

console.log(nomes,/*  removidos */) // vai criar um novo array com os removidos vai criar o array e mais esse novo de removidos

