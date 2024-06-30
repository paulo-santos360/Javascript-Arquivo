//const verdadeira = true;


//let nome = 'Luiz';
//let não pode ser redeclarada

//var nome2 = 'Luiz';
//var pode ser redeclarada

//let nome = 'ZE';

/* if(verdadeira){
    console.log(verdadeira)
} */

/* if(verdadeira){
    console.log(nome, nome2);
} */

/* if(verdadeira){
    let nome = 'NARUTO'
    console.log(nome, nome2);
} */

// 1 - var, let e const
var x = 10
var y = 15

if(y > 10){
    // var redeclarar em qlq lugar
    var x = 5
    //console.log(x);
}
//console.log(x);

let a = 10;
let b = 15;

if(b > 10){
    // let e const não inteferir no global e manter o codigo do bloco
    let a = 5
    console.log(a);
}
console.log(a);

let i = 100;

// variavel temporaria não altera o i global pode criar a msm variavel e não quebrar o scopo
for (let i = 0; i < 3; i++){
    console.log(i)
}

console.log(i);


// não quebrar o scopo de bloco e const não pode ser redefinido fora do bloco
function logname() {
    const name = 'ZE'
    console.log(name)
}

const name = 'pedro'

logname();

console.log(name)
