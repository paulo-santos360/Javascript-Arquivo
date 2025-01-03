//alert('com nossa mensagem');// não retorna valor nenhum na memoria
//window.confirm('Deseja realmente apagar');
//window.confirm('Deseja realmente apagar')
// retorna valor Boleano V ou F PODE CAPTURA A VARIAVEL COM const confirm = confirm('deseja realmente apagar);

//window.prompt('Digite seu Nome')

let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite outro numero: ");

num1 = parseFloat(num1)
num2 = parseFloat(num2)

//const resultado = num1 + num2;
//alert("Resultado é igual " + resultado);
alert(`Resultado é igual: ${num1 + num2}`);