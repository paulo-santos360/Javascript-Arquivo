function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression
const add = function (num1, num2){
    return num1 + num2;
}
//const thirdValue = add(5, 6);
const values = [firstValue, secondValue, add(5, 6)];//thirdValue
console.log(values);

const multiply = (num1, num2) => num1 * num2;