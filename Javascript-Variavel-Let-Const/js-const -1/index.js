const nome = 'Paulo Alexandre';
const sobrenome = 'Santos';
const idade = 34;
const peso = 62;
const alturaEmM = 1.76; // <-- NESTE LOCAL

let indiceMassaCorporal;
indiceMassaCorporal = parseFloat(peso / (alturaEmM * alturaEmM));


let anoNascimento;
anoNascimento = (2023 - idade);


/*console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de',
 indiceMassaCorporal, nome, 'nasceu em', anoNascimento);
 console.log(nome, 'nasceu em', anoNascimento, '.');*/

 // concatenando +
 
/*console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' Kg ')
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' +
 indiceMassaCorporal + ' ' + nome + ' nasceu em ' + anoNascimento);
 console.log(nome + ' nasceu em ' + ' ' + anoNascimento + '.');*/

 // template string modelo correto mais legivel
 console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg `)
console.log(`tem ${alturaEmM} de altura e seu IMC é de 
 ${indiceMassaCorporal}`);
 console.log(`${nome} nasceu em ${anoNascimento}'.'`);
