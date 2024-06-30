/* function calculateTotal(subTotal, tax){

    const total = subTotal + tax;
    return total;
} */

const calculateTotal = function random(subTotal, tax){

    //const total = subTotal + tax;
    return subTotal + tax;
}

//console.log(calculateTotal(1,2))

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(1002, 10);
const order3 = calculateTotal(1005, 10);

console.log(order1, order2, order3);