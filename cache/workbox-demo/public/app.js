async function loadWord() {
  const url = 'http://localhost:4000/api/random'
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.str
  } catch (error) {
    return 'Unable to load from API'
  }
}

async function dislayWord() {
  const word = await loadWord()
  const el = document.getElementById('word')
  el.textContent = word;
}

dislayWord()

let x = 1
async function loadPow() {
  const url = 'http://localhost:4000/api/pow'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ x })
    })
    const data = await response.json()
    return data.result
  } catch (error) {
    return 'Unable to load from pow'
  }
}

async function displayPow() {
  const word = await loadPow()
  document.getElementById('x').textContent = x;
  document.getElementById('result').textContent = word;
}

displayPow()

function onAddX() {
  x += 1
  displayPow()
}

// window.addEventListener('load', () => {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//   }
// })