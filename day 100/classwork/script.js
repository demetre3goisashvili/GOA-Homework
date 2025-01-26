function updateProductDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json()).then((result) => {
        let photo = document.createElement("img")
        document.body.appendChild(photo)
        photo.src = result.image;

        let cat = document.createElement("p")
        document.body.appendChild(cat)
        cat.textContent = result.category;

        let pri = document.createElement("p")
        document.body.appendChild(pri)
        pri.textContent = result.price;

        let des = document.createElement("p")
        document.body.appendChild(des)
        des.textContent = result.description;
        console.log(result);
    });
}


updateProductDetails(1);


updateProductDetails(2);


updateProductDetails(3);

updateProductDetails(4);






fetch(`https://fakestoreapi.com/products`).then((res) => res.json()).then((result) => {
    for (let i = 0; i < result.length; i++){
        console.log(result[i].category)
        console.log(result[i].description)
        console.log(result[i].id)
        console.log(result[i].image)
        console.log(result[i].price)
        console.log(result[i].rating)
        console.log(result[i].title)


    }

});




