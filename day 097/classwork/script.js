let nam = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let but = document.getElementById("but");

but.addEventListener("click", () => {
    localStorage.setItem('name', nam.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('email', email.value);

    
    let output = document.createElement("div");
    output.innerHTML = `
    <p>Name: ${nam.value}</p>
    <p>Age: ${age.value}</p>
    <p>Email: ${email.value}</p>
    `;
    
    document.body.appendChild(output);
});

window.onload = () => {
    let name1 = localStorage.getItem('name');
    let age1 = localStorage.getItem('age');
    let email1 = localStorage.getItem('email');

    if (name1 && age1 && email1) {
        let output = document.createElement("div");
        output.innerHTML = `
        <p>Name: ${name1}</p>
        <p>Age: ${age1}</p>
        <p>Email: ${email1}</p>
        `;
        document.body.appendChild(output);
    }
};

