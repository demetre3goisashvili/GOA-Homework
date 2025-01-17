const image = document.getElementById('image');
fetch('https://fakestoreapi.com/products/1')
  .then((res) => res.json())
  .then((json) => {
    image.src = json.image;
    document.getElementById('category').textContent = json.category;
    document.getElementById('price').textContent = json.price + '$';
    document.getElementById('desc').textContent = json.description;
    console.log(json);
  });