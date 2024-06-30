// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 24, position: "designer" },
  { name: "anna", age: 20, position: "the boss" },
  { name: "john", age: 20, position: "the boss" },
];

const ages = people.map(function (person) {
  //console.log(person);
  //return 'hello world'
  return person.age + 30;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<div class="text-center">
        <h1>${person.name}</h1>
        </div>`;
});

document.body.innerHTML = names.join("");

//console.log(names)
//console.log(newPeople)
//console.log(ages)
