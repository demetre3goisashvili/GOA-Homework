let sergi = document.getElementById("bu");
let reset = document.getElementById("re");
let num = document.getElementById("nu");

let count = 0; // Initialize a counter

sergi.addEventListener("click", () => {
    count += 1; // Increment the counter
    num.textContent = count; // Update the displayed value
});

reset.addEventListener("click", () => {
    count = 0; // Reset the counter
    num.textContent = count; // Update the displayed value
});