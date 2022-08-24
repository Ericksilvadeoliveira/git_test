const container = document.querySelector('#container');

//<DIV>
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//<P>
const parared = document.createElement('p');

parared.classList.add('parared');
parared.textContent = 'Hey Im red!';
parared.style.cssText= 'color: red';

const p = document.getElementsByClassName('content');
container.appendChild(parared);

//H3
const h3blue = document.createElement('h3');

h3blue.classList.add('h3blue');
h3blue.textContent = 'Im a blue h3!';
h3blue.style.cssText = ('color: blue');

container.appendChild(h3blue);

//<SECOND DIV>
const divblack = document.createElement('div');

divblack.classList.add('divblack');
divblack.style.borderColor = ('black');
divblack.style.borderStyle = ('solid');
divblack.style.textAlign = ('center');
divblack.style.borderRadius = ('10px');
divblack.style.backgroundColor = ('pink');

container.appendChild(divblack);

//H1
const h1 = document.createElement('h1');

h1.classList.add('h1');
h1.textContent = 'Im in a div';

divblack.appendChild(h1);

//<P> DIVBLACK
const pdivblack = document.createElement('p');

pdivblack.classList.add('pdivblack');
pdivblack.textContent = 'ME TOO!';

divblack.appendChild(pdivblack);

//METÓDO 2 BUTTONS
//const btn = document.getElementById('btn');
//btn.onclick = () => alert('Hello World (METÓDO 2)');

//METÓDO 3 BUTTONS
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('Hello World');
})



