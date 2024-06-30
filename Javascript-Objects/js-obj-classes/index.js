// Classes

// As classes são recursos fundamentais para programar com orientação a objetos;
// Agora o JS tem este recursos implementado, onde temos acesso a: constructor, propriedades, métodos e mais;
// Antes as classes eram baseadas em funções (constructor functions);

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola v', 20)

console.log(shirt.name);
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis verde', 120)
console.log(tenis.productWithDiscount(20))

// Herança

// Podemos criar herança de classes com ES6 Também;
// Utilizamos a palavra extends para referir a classe herdada
// E as propriedades que utilizamos dela, devem ser enviadas via função super

class productWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
           this.colors.forEach((color) => {
            console.log(color)
           });
        }
    
}

const hat = new productWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Azul',
    'Verde',
])

console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()