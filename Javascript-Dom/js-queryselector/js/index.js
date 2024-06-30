const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';
//result.style.color = 'white';

const item = document.querySelector('.special');
//console.log(item);

const lastItem = document.querySelector('li:last-child');
//console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item){
    console.log(item)
    item.style.color = 'yellow';
})