// return
// Retorna um valor
// Termina a função

/* function soma(a, b){
    return a + b;
} */

//console.log(soma(5, 2))

// console.log so exibi o valor
/* function soma2(a, b){
    console.log(a + b);
}

soma2(5, 2) */

/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
}) */

function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome}
}

const p1 = criarPessoa('Luiz', 'Otavio');
const p2 = { nome: 'João', sobrenome: 'Oliveira'};

console.log(typeof p1);
console.log(typeof p1);