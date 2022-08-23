const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const parared = document.createElement('p');

parared.classList.add('parared');
parared.textContent = 'Hey I m red!';