var nota1 = parseInt(prompt('Digite um numero: '))
var nota2 = parseInt(prompt('Digite um outro numero: '))

var media = (nota1 + nota2)/2

//alert(media > 5)
 
if(nota1 === 0  || nota2 === 0 || media <= 5){  
    alert('Reprovado')
}else{
    alert('Parabens Aprovado')

}