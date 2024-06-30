/* Operadores Lógico
&& -> And -> E, TUDAS AS EXPRESSÕES TEM QUE SER VERDADEIRO
|| -> OR -> OU, PELO MENOS UM TEM QUE SER VERDADEIRO
! -> NOT -> NÃO, RETORNA DIFERENTE
*/

/* const espressaoAND = true && true && false && true;
//const espressaoOR = true || false;
//const espressaoNOT = true ! true;
console.log(espressaoAND); */

//USA MUITO PRA DESVIAR O FLUXO

const usuario = 'JOAO';// FROM USUÁRIO DIGITOU
const senha = '123454';// FROM USUÁRIO DIGITOU

const vaiLogar = usuario === 'JOAO' && senha === '123454';
console.log(vaiLogar)