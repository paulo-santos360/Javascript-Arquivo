/*
&& -> false && true -> false "O valor msm"
|| -> true && false -> vai retorna "o valor msm uma pelo menos Verdadeira"
Falsy 

valores falsos em JS
false
0 '' "" `` null/ undefined
NaN
*/

//console.log('PAULO SANTOS' &&  '' && 'MARIA')// '' "" `` NULL UNDEFINED NAN
/* 
function falaOi (){
    return 'Oi';
}
let vaiExecutar = 'ze';

console.log(vaiExecutar && falaOi()); */

//console.log(0 || false || null || 'Luiz Otavio' || true);

/* const corUsuario = 'VERMELHO';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); */

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
