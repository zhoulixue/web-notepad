import HomeList from './HomeList'
// 必须用异步加载的方式使用模块联邦
import('nav/Header').then((Header) => {
  console.log(Header)
  const div = document.createElement('div')
  div.appendChild(Header.default())
  div.innerHTML += HomeList(6)

  document.body.appendChild(div)
})
