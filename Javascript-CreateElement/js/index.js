// createElement('element')
// createTextNode('text content')
// element.appendChild(childElemnt)

// insertBefore('element','location')

// repllaceCild('new', 'old');

const result = document.querySelector('#result');
//const first = document.querySelector('.red');

// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
//bodyDiv.classList.add('text');

document.body.insertBefore(bodyDiv, result)
// insert before result

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
document.body.appendChild(heading);
heading.classList.add('blue');

//result.appendChild(heading);

console.log(result.children)

const texte = document.querySelector('texte')
const bodyText = document.createElement('div');
const txt = document.createTextNode('somente um texto');
bodyText.appendChild(txt);
document.body.appendChild(bodyText)

//document.body.insertBefore(texte, result)

const smallHeading = document.createElement('h6');
const smallText = document.createElement(`I m small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv)
