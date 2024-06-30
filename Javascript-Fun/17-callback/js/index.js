function exibirArtigo(id, callbackSucesso, callbackErro){
    //logica recuperar o id via requisição http
    if(true){
        callbackSucesso('Função de callback em JS 2c', 'Funções de callback são muito usada em JS 1');
    } else{
        callbackErro('Erro ao recuperar os dados');

    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>' )
    document.write('<hr />')
    document.write('<p>' + titulo + '</p>' )

}
 
var callbackErro = function(){
    document.write('<p><b>erro</b>' + erro + '</p>' )

}

exibirArtigo(1, callbackSucesso, callbackErro );