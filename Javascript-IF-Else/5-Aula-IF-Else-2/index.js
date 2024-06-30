const numero = 9;

//Se (numero >= 0 && numero <=5) ocorrer, faça isso codigo
//Se não faça isso{o código}

/* if(numero >= 0 && numero <=5){
    console.log('O número está entre 0 e 5');
}else{
    console.log('O número não está entre 0 e 5');
} */


//o else no meio vai alterar o codigo não vai chegar a ultilizar a msg

if(numero >= 0 && numero <=5){
    console.log('O número está entre 0 e 5');
}else if(numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8.')
}//else if(1 === 1){// vai executar antes Verdadeira
    //console.log('literal')
//}
else if(numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11.');
}else{
    console.log('O número não esta entre 0 e 11');
}

//console.log('resto do codigo')

//console.log('O número não está entre 0 e 5')