// filteer
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 24, position: "designer" },
  { name: "anna", age: 20, position: "the boss" },
  { name: "john", age: 20, position: "the boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position === "developer";
});

//console.log(youngPeople);
//console.log(developers);

//filter

// O filter é um método de array para filtrar dados, baseado em alguma condição que estabelecemos;
// Isso nos dá um array com apenas os elementos que queremos, de forma perfomática;
// Há vários métodos de array importantes no ES6, este é um developers;

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

//console.log(highNumbers)

const users = [
  { name: "Matheus", available: false },
  { name: "ze", available: true },
  { name: "antonio", available: true },
  { name: "Marcos", available: false },
];

const availableUsers = users.filter((user) => user.available);

// console.log(notAvailableUsers)
console.log(availableUsers)