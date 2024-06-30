// Map

// O map é um método de array também, que percorre todos os elementos;
// Quando utilizamos Map, estamos querendo modificar os dados do array
// Há vários métodos de array importante no ES6, Este é um deles

const products = [
  { name: "Camisa", price: 10.99, category: "Roupa" },
  { name: "Camisa Pokemon", price: 14.99, category: "Roupa" },
  { name: "Focão", price: 350.99, category: "Eletro" },
  { name: "Geladeira", price: 10.99, category: "Eletro" },
];

products.map((product) => {
    if (product.category === 'Roupa') {
        product.onSale = true
    }
})

console.log(products)