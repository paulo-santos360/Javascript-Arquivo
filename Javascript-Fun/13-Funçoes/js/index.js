// void realizar um processamento mas nao retorna 
// retorno

function calcularAreaTerreno( largura, comprimento){
    //logica
    var area = largura * comprimento

   //document.write('O terreno possui ' + area + ' metros quadrado ')// função void apena de execução

   return area
}

var largura = prompt('Digite a largura do terrno em metros');
var comprimento = prompt('Digite a comprimento do terrno em metros');
var area = calcularAreaTerreno(largura, comprimento);

document.write(' O terreno possui ' + area  + ' metros quadrados ');

//document.write(3, 6)