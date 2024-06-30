var nota = prompt('Digite a nota do aluno');
var media = 7;

if(nota >= media){
    document.write('Aprovado')// '7' === 7 ia cai no reprovado por que são de tipos diferentes
} else{
    document.write('Reprovado')//mostra a que da dentro() false ou verdadeiro
}