var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'abacaxi'// ou um que nao existe

//mostra o indice do array caso nao retorne vai retorna -1
//console.log(lista_frutas.indexOf('Morango'))

var auxiliar = lista_frutas.indexOf('Banana')

if(lista_frutas.indexOf('abacaxi') === -1){
    //alert('Elemento não existe')
    console.log('Elemento não existe')
}else{
    console.log('Elemento existe e está na posição ' + auxiliar)
}

