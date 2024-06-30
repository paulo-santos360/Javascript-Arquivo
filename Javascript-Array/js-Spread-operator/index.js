// Spread operator

// O Spread pode ser utilizado também em arrays e objetos;
// Utilizamos para constituir novos valores dados em outros em outros arrays e objetos;
// Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, por exemplo;

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]// ... spread operator

console.log(a3)

const carName = { name: 'Gol'}
const carBrand = { brand: 'VW'}
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)