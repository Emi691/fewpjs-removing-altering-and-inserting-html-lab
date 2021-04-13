// Write your code here!
let main = document.querySelector('main#main');
main.remove();

let header = document.createElement('h1');
header.setAttribute('id','victory');
header.innerHTML = 'Emiko is the champion';
document.body.appendChild(header);
let newHeader = document.querySelector('h1#victory');