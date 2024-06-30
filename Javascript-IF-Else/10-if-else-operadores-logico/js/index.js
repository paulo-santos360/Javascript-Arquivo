//true && true && false = false
/* if(2 == 2 && 3 >= 1 && 'a' == 'b'){
    document.write('Verdadeiro');
}else{
    document.write('false'); */

//}// false por que uma e diferente

//true && true && false = false
/* if(2 == 2 || 3 >= 1 || 'a' == 'b'){
    document.write('Verdadeiro');
}else{
    document.write('false'); */

//}//verdadeiro porque uma pelo menos e V
/* 
if(!(4 == 2)){
    document.write('Verdadeiro');
}else{
    document.write('false'); */

//}// OPERADOR LOGICO INVERTE O VALOR


// E && VERDADEIRO SE TODAS AS EXPRESSÕES FOREM VERDADEIRA
// OU || VERDADEIRO SE PELO MENOS UMA FOR VERDADEIRA
// NEGAÇÃO ! INVERTE O RESULTADO DA EXPRESSÃO DE COMPARAÇÃO

var nota = prompt('Digite a nota do aluno');
var faltas = prompt('Digite a quantidade de faltas')
var media = 7;
var faltas_maximas = 15;
/* 
if(nota >= media && faltas <= faltas_maximas){// verdadeiro se todas retorna verdadeiro
    document.write('Aprovado')
} else{
    document.write('Reprovado')
} Condição da na linha de baixo*/

//var resultado = | ? <verdadeiro> : <false>

var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)