//var nome = 'Maria';
//var idade = 28;

var nome = prompt('Digite seu nome:');//prompt sempre receber como string o valor
var idade = prompt('Digite sua idade: ');//fica preta tipo string no console log
var idade2 = 50;//fica azul tipo numebr

console.log(idade);
console.log(idade2);


document.write('<h1>Olá '  + nome + ', tudo bem? Estou vendo aqui que você possui ' + idade + 'anos.</h1>');