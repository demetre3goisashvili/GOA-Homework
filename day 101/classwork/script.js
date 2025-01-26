let button = document.getElementById("dawg");


button.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(res => {
            if (!res.ok) {
                throw new Error(`Sir, you have an error: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log(data); 
            const imageUrl = data.message; 
            displayImage(imageUrl); 
        })
        .catch(error => console.error(error));
});

function displayImage(url) {
    const imgContainer = document.getElementById("img"); 
    imgContainer.innerHTML = `<img src="${url}">`;
}