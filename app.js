console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');

document.getElementById('submit').addEventListener('click', () => {
  const img = document.querySelector('img');
  const input = document.getElementById('searchWord').value;

  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=' + input,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((res) => {
      img.src = res.data.images.original.url;
    })
    .catch((response) => console.log(response));
});
