var numero = prompt('digite um numero')
numero = parseFloat(numero)

var indice = 1

/* for(var indice = 1;indice <=1000;indice++)
document.write(numero + ' X ' + indice + '=' + numero * indice + '<br>'); */

while(indice <= 1000){
document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br>');
indice = indice + 1;
}
document.white('saiu do loop')