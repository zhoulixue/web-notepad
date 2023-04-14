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

// serviceWorkerRegister.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
