import helloWorld from './hello-world';
import mageSrc from './assets/image.png';
import logoSrc from './assets/icon.svg';
import textDemo from './assets/demo.txt';

const img = document.createElement('img');
img.src = mageSrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = logoSrc;
document.body.appendChild(img2);

const txt = document.createElement('div');
txt.innerHTML = textDemo;
document.body.appendChild(txt);

helloWorld();
