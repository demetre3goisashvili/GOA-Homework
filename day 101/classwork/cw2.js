fetch('https://fakestoreapi.com/product')
    .then(res => {
        if (!res.ok) {
            if (res.status === 404) {
                let div = document.createElement('div');
                document.body.appendChild(div);
                div.innerHTML = `
                    <img src="sad.png" alt="Sad face">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you were looking for was not found.Please contact support at blabla.com.</p>
                `;
            } else {
                throw new Error(`Sir pls fix error: ${res.status}`);
            }
        }
        return res.json();
    })
    .then(data => {
        
        document.getElementById('category').textContent = data.category;
        document.getElementById('price').textContent = `$${data.price}`;
        document.getElementById('desc').textContent = data.description;
        document.getElementById('image').src = data.image; 
    })
    .catch(err => {
        console.error(err);
    });