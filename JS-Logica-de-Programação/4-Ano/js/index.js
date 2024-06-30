var ano = 1004;
while(ano <= 2007){

    if(!(ano % 100 === 0) || (ano % 400 === 0)){
        document.write(ano + '<br>');
    }else{
        document.write(ano + 'Não é bissexto <br>')
    }
    document.write(ano + '<br>');
/*     ano = ano + 4;
 */    ano += 4;
}