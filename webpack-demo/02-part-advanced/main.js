import style from './style.css';
// import './input';
import $ from 'jquery';

console.log($);

console.log(style);

const button = document.createElement('button')
button.textContent = '添加'
button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('block')
  document.body.appendChild(div)
})
document.body.appendChild(button)

// if (module.hot) {
//   module.hot.accept('./input.js', () => {})
// }
