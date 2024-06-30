
function soma(){
    var resultado = 0
    for (var i in arguments) {//arguments recupera os paramentros
        resultado += arguments[i]
    }
    return resultado
    //console.log(arguments)//retorna um array tipo um objeto, mais não se trata de um Array
}

console.log(soma(5,4,' ola '))