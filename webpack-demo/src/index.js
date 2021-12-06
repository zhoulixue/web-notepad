import _ from 'lodash';
import helloWorld from './hello-world';
import mageSrc from './assets/image.png';
import logoSrc from './assets/icon.svg';
import textDemo from './assets/demo.txt';
import data from './assets/data.csv';
import note from './assets/data.xml';
import './style.scss';
import './async-module';

helloWorld();

const img = document.createElement('img');
img.src = mageSrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = logoSrc;
document.body.appendChild(img2);

const txt = document.createElement('div');
txt.classList.add('block-bg');
txt.innerHTML = textDemo;
document.body.appendChild(txt);

const icon = document.createElement('span');
icon.innerText = 'TencentSans-W7';
icon.classList.add('icon');
document.body.appendChild(icon);

console.log(data);
console.log(note);

console.log(_.join(['Index', 'modules'], ' '));

const btn = document.createElement('button');
btn.innerText = '点击执行加法';
btn.onclick = () => {
  // webpackPrefetch webpackPreload
  import(/* webpackChunkName: 'math', webpackPreload: true */'./math.js').then(({ add }) => {
    console.log(add(4, 5));
  });
};
document.body.appendChild(btn);
