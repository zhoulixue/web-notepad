const HomeList = (num) => {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += `<li>Item${i}</li>`
  }
  return `<ul>${str}</ul>`
}

export default HomeList
