var jogador1 = (prompt('digite um numero: '))
var jogador2 = (prompt('digite outro numero: '))

if(jogador1 == jogador2){
    alert('vocês empataram')
}else{
  var sorteio = parseInt(Math.random()*2)

    if(sorteio === 0){
        if(jogador1 < jogador2)
        alert('ganhou jogador 1')
    }else{
        alert('gannha jogador 2')
    }

}




