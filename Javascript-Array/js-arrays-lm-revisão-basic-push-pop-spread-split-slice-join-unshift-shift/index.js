// Valor por referência 

// index          0          1        2
//const nomes = ['Eduardo', 'Maria', 'João'];

//const nomes = new array ['Eduardo', 'Maria', 'João']; funciona ta msm forma construtor
//nomes[2] = 'João'
//delete nomes [2] // deleta o array com essa função
//console.log(nomes)

// tudo que fizer em um reflete no outro vai sempre apontar na memoria do array
//const nomes = ['Eduardo', 'Maria', 'João'];
//const novo = nomes;

//novo.pop();
//console.log(nomes)


// ... spread operador 
// const nomes = ['Eduardo', 'Maria', 'João'];
//const novo = [...nomes]; // se colocar so novo = nomes afeta os dois

//novo.pop();
//console.log(nomes)
//console.log(novo)

//console.log(nomes.length) // paga o tamanho do array
// nomes.pop() // remove o ultimo do array
// console.log(nomes)

//const nomes = ['Eduardo', 'Maria', 'João'];
//const removido = nomes.pop();
//console.log(nomes, removido) // mostrar o elemento removido POP PEGA O EMEMENTO DO FIM DO ARRAY


//const nomes = ['Eduardo', 'Maria', 'João'];
//const removido = nomes.shift();
//console.log(nomes, removido) // mostrar o elemento removido SHIFT PEGA O EMEMENTO DO INICIO DO ARRAY


//const nomes = ['Eduardo', 'Maria', 'João'];
//nomes.push('João')
//console.log(nomes) // PUSH adiciona no final do ARRAY

//const nomes = ['Eduardo', 'Maria', 'João'];
// nomes.unshift('João')
// console.log(nomes) // adiciona no inicio do ARRAY UNSHIFT

//const nomes = ['Eduardo', 'Maria', 'João'];
//const novo = nomes.slice(0, 3) //1, -1
// console.log(novo) // fatia e vc pode trabalhar com numeros negativos tb SLICE

//const nome = 'Luiz Otavio Miranda';
//const nomes = nome.split(' ') // (',') SEPARA A VIRGULA SE TIVER VIRGULA NA STRING
//console.log(nomes) // Separa String e Array SPLIT

const nomes = ['Luiz', 'Otavio', 'Miranda' ];
const nome = nomes.join(' '); // PARA SEPARAR PODE SE ' ' OU ,
console.log(nome); // JOIN uni tudo e faz virar STRING

// RESUMO TA AULA

//push()Adiciona um elemento ao final DO ARRAY
//pop()Remover o último ELEMENTO DO ARRAY
//shift()Remover o primeiro ELEMENTO DO ARRAY
//unshift()Adicionado um elemento ao início DO ARRAY
//slice()Retorna uma fatia DO ELEMENTO DO ARRAY DE ACORDO COM O INDICE

// join()*Método `join()`** O método **`join()`** é utilizado para 
// **unir os elementos de um array em uma string**, separando-os com o delimitador especificado. 
// Caso nenhum delimitador seja fornecido, ele usa uma **vírgula** por padrão. --- ### **Sintaxe** 
// ```javascript array.join(separador); ``` - **`separador`** (opcional): 
// O caractere ou string que será usado para separar os elementos. -

// split()Converte uma string em um array

// Operador de propagação ( ...) Operador de spread** O **operador de spread** (`...`) permite **espalhar** os elementos de arrays, objetos ou outros iteráveis, sendo muito útil para cópias, cópias ou manipulações. --- 1. **Cópia de Arrays** Cria uma cópia de um array sem referenciar o original. *
