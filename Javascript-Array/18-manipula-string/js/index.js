//propriedade length
//document.write('Jorge Sant Ana'.length + '<br/>') ;

//propriedade charAt(retorna o valor dentro)
//document.write('Jorge Sant Ana'.charAt(2)  + '<br/>') ;

var nome = 'Jorge Sant Ana';

//document.write(nome.indexOf('g')) + '<br/>';

//altera os valor da string pela segunda
document.write(nome.replace('Sant Ana', 'Jose')  + '<br/>');

//recupera o 1 e 2 parametro de acordo com o numero da string
document.write(nome.substr('6', '4') + '<br/>');

document.write(nome.toLocaleUpperCase() + '<br/>') ;

document.write(nome.toLowerCase() + '<br/>') ;

document.write('-'+ nome.trim() + '<br/>') ;