// Objeto Basico

/*
Objetos são coleções de pares de valores-chave (propriedades) Os valores de propriedades podem ser strings, números, booleanos, arrays e
funções, no entanto, se os valores da propriedade puderem ser strings, números, booleanos, matrizes e funções, no entanto, se o valor da propriedade for uma função, é chamado de método */

// sintaxe literal do objeto,{}
// notação de ponto

const person = {
    name: 'john',
    age: 25,
    married:true,
    sibling:['anna', 'peter'],
    greet:function(name){
        console.log(`Hello, my name is ${name}`)
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`)
    }
}

console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = 'chicago';

//deletar propriedade
delete person.sibling;

const siblings = delete person.sibling;
console.log(siblings);

console.log(person);
