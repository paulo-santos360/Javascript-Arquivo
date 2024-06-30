// innerHtml
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.getElementById('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = 'random Vale'

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
<li>List item</li>
<li>List item</li>
<li>List item</li>`

// para aparecer as li filha de ul
document.body.appendChild(ul)

div.textContent = `<li class="item">${randomVar}</li>
<li>List item</li>
<li>List item</li>
<li>List item</li>`;
