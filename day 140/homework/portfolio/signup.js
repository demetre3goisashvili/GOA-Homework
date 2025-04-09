let sub = document.getElementById('sub');

sub.addEventListener('click', (event) => {
    event.preventDefault(); 

    let saxeli = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let repeat = document.getElementById('repeat').value;

    if (saxeli === '' || email === '' || pass === '' || repeat === '') {
        alert("Please fill out all the inputs.");
    } 
    
    else if (pass !== repeat) {
        alert("Passwords do not match.");
    } 
   
    else {
        localStorage.setItem('name', saxeli);
        localStorage.setItem('email', email);
        localStorage.setItem('pass', pass);
        window.location.href = 'signin.html'; 
    }
});