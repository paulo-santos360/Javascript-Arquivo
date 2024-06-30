const frm = document.querySelector("form")//obtém elemento da pagina
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{  //"escuta" evento submit do form
    e.preventDefault()                 //evita envio do form
    const numero = Number(frm.inNumero.value)//obtém número informado
    let resposta = ""   //variável do tipo string, para concatenar a resposta
    //cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++){
        //a variavel resposta vai acumular os novos conteúdo(nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "" 
        //resposta = `${resposta}${numero} x ${i} = ${numero * i}/n`
    }
        //o conteúdo da tag pre é alterado para exibir a tabuada do numero
    resp.innerText = resposta
})