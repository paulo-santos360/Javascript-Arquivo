var numero = prompt('digite um numero');
numero = parseFloat(numero);

var indice = 0;
//repita até

while(indice <= 1000)
document.write( numero + ' X '+ indice +' = ' + (numero * indice)  + '<br>'); 

if(indice % 10 === 0 && indice > 0){
    document.write('<hr>');
}
indice = indice + 1;

/* var indice = 1 */
 ///Repita até que indice seja <= 1000

/* for(var indice = 1;indice <=1000;indice++)
document.write(numero + ' X ' + indice + '=' + numero * indice + '<br>');  */
/* 
while(indice <= 10){
document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br>');
indice = indice + 1;
}
document.white('saiu do loop') */

//Faça ate while
/* do{
    document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br>');

    indice = indice + 1;

}while(indice <= 10)
document.write('saiu do loop'); */