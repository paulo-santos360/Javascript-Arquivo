var jogador1 = (prompt('digite um numero: '))
var jogador2 = (prompt('digite outro numero: '))

if(jogador1 == jogador2){
    alert('vocês empataram')
}else{
    var sorteado = parseInt(Math.random() *2);
    alert('Sorteado: ' + sorteado)

    if( sorteado === 0 && jogador1 < jogador2 || sorteado === 1 && jogador1 > jogador2){
        alert('ganhou o jogador1')
    }else{
        alert('ganhou o jogador2')
    }
}