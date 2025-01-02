// Map alterar o valor mas ele usa o array original ele sempre vai ter o tamanho do array original
// Dobre os números
//               0   1
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* const numerosEmDobro = numeros.map(function(valor) {
    console.log(valor, indice, array) // ver o array
}) */

/* const numerosEmDobro = numeros.map(function(valor) {
    return `Luiz -> ${valor}` // `0` retorna 0 mas sempre vai ter o tamanho do array original
})
console.log(numerosEmDobro) */

// Dobre os números
/* const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2; }) 
console.log(numerosEmDobro) */

// Dobre os números Arrow Fuction
// const numerosEmDobro = numeros.map(valor => valor * 2 )
// console.log(numerosEmDobro)

// Ver o Indice dos números
/* const numerosEmDobro = numeros.map(function(valor, indice) {
    return indice; }) 
console.log(numerosEmDobro) */

// Para cada elemento
// Retorn apenas uma string com o "nome" do objeto
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorn apenas uma string com o "nome" do objeto

/* const nomes = pessoas.map(function(obj) {
    return obj.nome
}) */

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

/* const idades = pessoas.map(function(obj) {
    // delete obj.nome;
    // return obj;
    return { idade: obj.idade }; // Objeto novo
}) */

// const idades = pessoas.map(obj => ({ idade: obj.idade }));
// console.log(idades);

// Adicione uma chave id em cada objeto
/* const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice; // (indice + 1) * 1000;
    return obj
}) */

//console.log(pessoas) // quando se coloca obj se mexer no obj original 
// passado por valores pra nao alterar o original tem que criar um novo array
//console.log(comIds)

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; // NOVO array pra não alterar o antigo array cuidado quando trabalho com valore com referencia
    newObj.id = indice; 
    return newObj
})

//console.log(pessoas)
console.log(comIds)
