function calcular(tipo, valor) {
  //console.log(tipo, valor, acao)
  if (tipo === "acao") {
    if (valor === "c") {
      // limpar o resultado (id resultado)
      document.getElementById("resultado").value = "";
    }
    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor
    }

    if(valor === '='){
        var valor_campo = eval(document.getElementById('resultado').value) 
        //console.log(eval(valor_campo))
        document.getElementById('resultado').value = valor_campo
    }
  } else if (tipo === "valor") {
    /*  var valor_campo = document.getElementById('resultado').value
        document.getElementById('resultado').value = valor_campo + valor 
        Diminuindo o codigo*/

    document.getElementById("resultado").value += valor; //atribui valor + valor
  }
}
