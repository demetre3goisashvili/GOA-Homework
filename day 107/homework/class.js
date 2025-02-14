export class Product {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    getProductHTML() {
        return `
            <div class="product">
                <img src="${this.image}" alt="${this.name}">
                <h2>${this.name}</h2>
                <p>Price: $${this.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
    }
}
