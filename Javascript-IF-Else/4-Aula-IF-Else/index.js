const hora = 50;
/* 
if(hora >=7 && hora <=11){
    console.log('Bom dia');
}else if(hora >= 12 && hora <=18){
    console.log('Boa tarde');
}else{
    console.log('Boa noite');
} */

/* Entre 0 - 11 Bom dia 
Entre 12 - 17 Boa TARDE
Entre 18 - 23 Boa Noite
*/

//IF pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Poso ter varios else if na Condição
// Só posso ter um else na chegagem
// Podemos usar condições sem else if, utilizando apenas if e else

if(hora >= 0 && hora <=11){
    console.log('Bom dia');
}else if(hora >=12 && hora <=17){
    console.log('Boa tarde')
}else if(hora >=18 && hora <=23){
    console.log('Boa Noite')
}else if(hora >=24){
    console.log('olá')
}

const tenhoGrana = false;

if(tenhoGrana){
    console.log('Vou sair de Casa');
}else{
    console.log('Não vou sair de casa');
}