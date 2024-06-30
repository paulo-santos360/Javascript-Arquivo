// Alert e do objeto windows O BOM pode usar metodo do browser
var janela

function abrirPopUp(){
    window.open('http://www.google.com', 'nova_janela', 'width=400, height=400,')
}

function fecharPopUp(){
    janela.close()
}
