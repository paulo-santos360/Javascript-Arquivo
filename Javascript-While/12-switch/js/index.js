var parametro = prompt('Digite um número') //ele nao reconhece a diferenca de string e manda para defaul

switch (parseInt(parametro)) {
  case 1:
    document.write('parametro 1')
    break;

  case 2:
    document.write('parametro 2')

    break;

  default:
    document.write('Default')
    break;
}
