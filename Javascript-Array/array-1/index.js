// indice        12   34567
let umaString = "Um texto";// para escapar aspa usa barra\"texto\"
//console.log(umaString[4]); um jeito
console.log(umaString.charAt(5));//selecionado caracter
console.log(umaString.concat(' em um lindo dia.'));//concatenando valores
console.log(umaString + ' em um lindo dia')
console.log(`${umaString} em um lindo dia`) //template string
console.log(umaString.indexOf('o', 3))//COMEÇA DO COMEÇO ATÉ O FINAL
console.log(umaString.lastIndexOf('m', 3))//COMEÇA DO FINAL PRA FRENTE  

console.log(umaString.match(/[a-z]/));// \g depois da barra
console.log(umaString.search(/[a-z]/));// search retorna o indice encontrado[so muda o que vc quer]
console.log(umaString.replace('Um', 'Duas'));// muda a palavra replace \Um\ tb funciona
console.log(umaString.replace(/e/g, '%'));// muda a palavra replace \Um\ tb funciona
console.log(umaString.length);// ver o tamanha da string
console.log(umaString.slice(2, 8));// ou -4 ou outro valor

let duasString = "O rato roeu a roupa do rei de roma."
console.log(duasString.slice(-5));
console.log(duasString.slice(32));
console.log(duasString.slice(-5, duasString.length -1));// jeito mais facil
console.log(duasString.substring(duasString.length -5, duasString.length -1));  
console.log(duasString.split(' ')); //posso pedir um valor dentro
console.log(duasString.toUpperCase); //tudo em Maiuculo
console.log(duasString.toLowerCase); //tudo em Minusculo