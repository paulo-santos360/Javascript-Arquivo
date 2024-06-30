const wallHeight = 80;

function calculate(value){

//const newValue = value * 2.54;
//console.log('The value in cm is: ' + value * 2.54 + ' cm');
//return 'hello world';
// return newValue;

return value * 2.54;

}

//calculate(200);
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);