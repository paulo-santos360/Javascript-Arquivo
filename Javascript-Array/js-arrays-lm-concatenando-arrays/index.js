const a1 = [1, 2, 3];
const a2 = [4, 5, 5];
//const a3 = a1 + a2;
//console.log(a3)
// sinal de + não funciona para concat do jeito esperado

//const a3 = a1.concat(a2);
// , [7, 8, 9], 'Luiz' = pode colocar dentro () ele concatena no array concat jeito certo

const a3 = [...a1, 'NARUTO', ...a2, ...[7, 8, 9]];// ... rest -> ... spread SE nao colocar ... fica [7, 8, 9] no console
console.log(a3)