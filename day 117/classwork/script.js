let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

button.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode')
    .then((res) => res.json())
    .then((json) => {
        button.disabled = true
      h1.textContent = json.setup;
      setTimeout(() => {
        p.textContent = json.delivery;
        button.disabled = false
        
      }, 1000);

    })
    .catch((error) => {
      console.error('Error fetching joke:', error);
      h1.textContent = 'Oops!';
      p.textContent = 'Failed to fetch joke.';
    });
});