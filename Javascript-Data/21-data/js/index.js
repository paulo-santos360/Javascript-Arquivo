/* var data = new Date()

//adicionar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 1)// -1 dia remove ou 720 aumenta dia e meses
document.write('<hr/>')
document.write(data.toString())
 
//adicionar / remover dias
document.write(data.toString())
data.setMonth(data.getMonth() + 1)// aumentar meses
document.write('<hr/>')
document.write(data.toString())

//adicionar / remover dias
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)// aumentar ano
document.write('<hr/>')
document.write(data.toString()) */

// 15/01/2017
var data1 = new Date(2017,0,15)

// 23/02/2017
var data2 = new Date(2017,1,23)

document.write(data1.toString())
document.write('<hr/>')
document.write(data2.toString())

document.write('<br/><br/><br/>')
//converte datas para algo que possamos calcular
document.write(data1.getTime())
document.write('<hr/>')
document.write(data2.getTime())

//1 de janeiro de 1970
document.write('<br/><br/><br/>')
//encontar a qtdade de m)ilissegundos entre data1 e data2
document.write(Math.abs(data1.getTime() - data2.getTime()))
document.write(milissegundos_entre_data)

var milissegundos_entre_data = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundos_entre_data)

var milissegundo_por_dia = (1*24*60*60*1000)
document.write(' 1 dia tem: ' + milissegundo_por_dia + ' milissegundos')

document.write('<br/><br/><hr/>')
document.write('A diferenca de data1 e data2 ' + Math.ceil(milissegundos_entre_data / milissegundo_por_dia))




// 1 dia tem 24 hora, cada hora de 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundo
//entao quantos milissegundo existem em um dia
document.write(' 1 dia tem: ' + (1*24*60*1000) + ' milissegundo ')

document.write('<br/><br/><br/>')
document.write()

