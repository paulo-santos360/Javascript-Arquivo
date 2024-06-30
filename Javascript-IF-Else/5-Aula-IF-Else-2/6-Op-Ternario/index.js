// ()  ? 'Valor para verdadeiro' : 'Valor para falso';

//const pontuacaoUsuario = 1000;

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'roxo';

console.log(nivelUsuario, corPadrao);



/* if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
} */