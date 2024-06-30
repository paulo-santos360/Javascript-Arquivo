// Destructuring

// O destructuring é um recurso que pode ser utilizado em arrays e objetos;
// A ideia é transformar os itens de um desses dados em variaveis;
// Simplificando a declaração de n variaeis para apenas 1 linha;

// Destructuring
const fruits = ['Maça', 'Laranja', 'Mamão'];
const [f1, f2, f3] = fruits
console.log(f1)

// Troca de Valores no Objetos
const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)