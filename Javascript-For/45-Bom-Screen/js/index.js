

var altura =  window.screen.availHeight
var largura = window.screen.availWidth

//document.write('Altura do navegador é: ' + altura + '<br/>')
//document.write('Altura do navegador é: ' + largura + '<br/>')

if(largura < 200){
    document.write('Lógica para impressão do menu versão mobile')
}else if(largura > 500){
    document.write('Lógica para impressão do menu versão web')
}