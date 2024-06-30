// Function, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {

    let total = 0;

    for(let i = 0; i < arr.length; i++) {
       // console.log(arr[i]);
       total += arr[i] //total
    }
    if (total > 100){
        console.log(`Whoa! you are spending way too much`)
        return total;
    }
    console.log(`You are good total is less than 100`)

    //console.log(total); //total
    return total;
}

//calculateTotal(gas)//'hello word'

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal( [200,4000,500,1]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
})
