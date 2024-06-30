//cria referencia ao form e elemento de resposta do programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//crie um "ouvinte" de evento, acionado o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault()             //eita envio do form
    const nome = frm.inNome.value //obtém valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 //calcular a média das notas
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`
    //cria as condições
    if(media >= 7){
        //altera o text e estilo da cor do elemento resp2
        resp2.innerText = `Parabens ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    }else if(media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "green"
    }else{
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red" 
    }

})