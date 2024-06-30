//let num1 = 102;
//let num2 = 2.5;

//console.log(num1.toString() + num2);vai concatenar 12.5
//console.log(typeof num1); mostrar o tipo
//console.log(num1.toString(2));mostrar binario
//console.log(num1.toFixed(2)); fiquixa casas decimais
//console.log(Number.isInteger(num1)); mostrar se o numero e inteiro

//let temp = num1 * 'ola';
//console.log(Number.isNaN(temp));//perguntado se a conta e valida se tivese 5 no ola return false

//let num1 = 0.7;
//let num2 = 0.1;

//num1 += num2;//0.8
//num1 += num2;//0.9
//num1 += num2;//1.0

//num1 = parseFloat(num1.toFixed(2));//para pasar o numero 1 Number ou ParseInt

let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;
num1 = ((num1 * 100) + (num2 * 100)) /100;

console.log(num1.toFixed(2));//to fixed 2 pra mostrar carrinho de compra
console.log(Number.isInteger(num1));