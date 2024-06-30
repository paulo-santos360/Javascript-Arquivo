//3 escopos: global, função e o bloco

var serie = 'Friends';

//escopo de bloco
if(true){
    //eleva a variavel pra cima se tiver declarada dentro da função
    var serie2 = 'batman'
    document.write(serie)
}

document.write(serie2)



document.write('<br/>')

function x(){
    var serie3 = "frindf";//fica somente dentro do bloco a função
    document.write(serie)
    document.write(serie2)

}
x()