let count = 1;

let button = document.createElement('button');
button.textContent = "CLICK ME PLS";
document.body.appendChild(button);

button.addEventListener('click', () => {
    count++;
    async function func() {
        try {
            let data = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
            let fixedData = await data.json();

            let text = document.createElement('p');
            text.textContent = fixedData.title;
            document.body.appendChild(text); 
            text.style.color = 'white'
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    func(); 
});