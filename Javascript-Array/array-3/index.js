/* let array = [1,2,3];
array.push(4)
array[0] = 'Luiz';
//array[1] = 'Outra';
console.log(array) */

/* const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Joao';
const sobrenome02 = 'Oliveira';
const idade02 = 25; */

/* const pessoa1 = {       //{Objeto}[array]
    nome: 'Luiz',
    sobre: 'Miranda',
    idade: 25
};
const pessoa2 = {
    nome: 'Paulo',
    sobre: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa2.nome); */

/* function criaPessoa (nome, sobrenome, idade){ //Função que cria OBJETO (AQUI É PARAMETRO)
    return{//RETORNA UM OBJETO DESSA MANEIRA
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Maria', 'Otavio', 25);
const pessoa3 = criaPessoa('Joao', 'Otavio', 25);
const pessoa4 = criaPessoa('Luiza', 'Otavio', 25);
const pessoa5 = criaPessoa('Luisao', 'Otavio', 25);

console.log(pessoa1.nome, pessoa2.nome);//ARGUMENTO QT ENVIA VALOR */

const pessoa1n = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
       //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
       console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1n.fala();
pessoa1n.incrementaIdade();
pessoa1n.fala();
pessoa1n.incrementaIdade();
pessoa1n.fala();
pessoa1n.incrementaIdade();
pessoa1n.fala();