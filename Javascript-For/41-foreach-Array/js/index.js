/* var listaFuncionarios = ['Paulo', 'Jose', 'Joao', 'Mateus', 'Lucas']

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f) */

/* 
console.log(listaFuncionarios)
document.write(listaFuncionarios[4] + '<br/>')
// função valor indice array
listaFuncionarios.forEach(function(valor, indice, array){
    //lógica
    console.log('indice' + indice + ' | valor: ' + valor)

    if(valor == 'Lucas'){
    array[indice] = 'Um novo valor'
    }
})

console.log(listaFuncionarios)
document.write(listaFuncionarios[4]) */

var listaFuncionarios = Array()//tecnica de wrap ForEach atua somente e numero

listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosa'
listaFuncionarios[1] = 'Carlos'
listaFuncionarios[2] = 'Miguel'
listaFuncionarios[-12] = 'Fernanda'

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)




