const dias = Number(prompt("N dias: ")) // lê os dados de entrada
const horas = Number(prompt("N Horas: "))
const total = (dias * 24) + horas // calcula a duração
alert(`total de horas: ${total}`)