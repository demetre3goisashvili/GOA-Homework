let book = new Map();

book.set("Harry Potter", {
  author: "J.K. Rowling",
  genre: "Fantasy Literature",
  price: 199,
  desc: "Harry Potter is a really good adventure book.",
});
book.set("The Great Gatsby", {
  author: "F. Scott Fitzgerald",
  genre: "Literal Classic",
  price: 399,
  desc: "The Great Gatsby is one of the most popular books.",
});
book.set("The Lord of the Rings", {
  author: "J. R. R. Tolkien",
  genre: "Fantasy Literature",
  price: 199,
  desc: "The Lord Of The Rings is a really good fantasy book.",
});
book.set("The Little Prince", {
  author: "Antoine de Saint-Exupéry",
  genre: "Childrens Book",
  price: 99,
  desc: "The Little Prince is one of the best childrens book.",
});

book.set("Shadows of the Forgotten Realm", {
  author: "Evelyn Nightshade",
  genre: "Fantasy Adventure",
  price: 249,
  desc: "A gripping tale of mystery, magic, and hidden secrets.",
})

book.set("The Quantum Paradox", {
  author: " Dr. Alan Crestwell",
  genre: "Science Fiction",
  price: 299,
  desc: "A thrilling journey into time, space, and human discovery.",
})



function cardmaker(filterTitle = null) {
  const container = document.createElement("div");
  container.classList.add("book-container");

  for (const [key, value] of book) {
    if (filterTitle && key !== filterTitle) continue;

    let div = document.createElement("div");
    div.classList.add("book-card");

    let h1 = document.createElement("h1");
    h1.textContent = `Book: ${key}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${value.author}`;

    let genre = document.createElement("p");
    genre.textContent = `Genre: ${value.genre}`;

    let price = document.createElement("p");
    price.textContent = `Price: ${value.price}`;

    let desc = document.createElement("p");
    desc.textContent = `Description: ${value.desc}`;

    div.appendChild(h1);
    div.appendChild(author);
    div.appendChild(genre);
    div.appendChild(price);
    div.appendChild(desc);

    container.appendChild(div);
  }
  return container;
}

let cards = document.getElementById("cards"); 
if (cards) {
  cards.appendChild(cardmaker()); 
}



