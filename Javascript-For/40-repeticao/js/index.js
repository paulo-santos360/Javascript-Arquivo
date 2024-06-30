/* var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

console.log(listaConvidados)

for(var x in listaConvidados){
    document.write('Indice ' + x + ' ' + listaConvidados[x] + '<br/>')
} */

var listaConvidados = Array()

listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados['zebra'] = 'José'
listaConvidados[-1] = 'Ana'
listaConvidados[true] = 'Maria'

console.log(listaConvidados)

for(var x in listaConvidados){
    console.log('Indice ' + x + ' valor ' + listaConvidados[x])
}