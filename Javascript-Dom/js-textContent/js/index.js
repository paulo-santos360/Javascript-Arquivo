// nodeValue
// textContent

//const item = document.getElementById('special');
//const value = item.nodeValue;
//console.log(item.childNodes[0].nodeValue)

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue)