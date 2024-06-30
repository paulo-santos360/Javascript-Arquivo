//Função Construtora

/* const tresHoras = 60 * 30 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;// aumentar um dia
const data = new Date(0 + tresHoras + umDia);//0 01/01/1970 Timestamp unix ou época unix
console.log(data.toString()) */

// ano, mes,dia,hora,minuto,segundo, milisegundos
//const data = new Date(2019, 3, 20, 15, 14, 27);//pode usar segundos no lugar do 27 // 1000 segundos da pra omitir a hora minuto segundos

//const data = new Date('2019-04-20 20:20:30')
// const data = new Date(1570473826636);
/* const data = new Date()
//data.getFullYear();
console.log('Dia', data.getHours());
console.log('Mes', data.getMonth() + 1);// Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());//Na Semana o Dia /0 - Domingo, 6 - Sábado/
console.log(data.toString());
console.log(Date.now()); */

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)