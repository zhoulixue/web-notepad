const { default: HomeList } = require('../../home/src/HomeList')

Promise.all([
  import('nav/Header'),
  import('home/HomeList')
]).then(([
  {
    default: Header
  },
  {
    default: HomeList
  }
]) => {
  document.body.appendChild(Header())
  const div = document.createElement('div')
  div.innerHTML = HomeList(6)
  document.body.appendChild(div)
})
