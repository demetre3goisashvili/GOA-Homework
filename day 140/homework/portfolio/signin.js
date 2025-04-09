let sub = document.getElementById('sub');

let saxeli = localStorage.getItem('name');
let email = localStorage.getItem('email');
let pass = localStorage.getItem('pass');

sub.addEventListener('click', (e) =>{
    e.preventDefault(); 

    
    let nam = document.getElementById('name').value;
    let em = document.getElementById('email').value;
    let pas = document.getElementById('pass').value;

   
    console.log('Stored name from localStorage:', saxeli);
    console.log('Stored email from localStorage:', email);
    console.log('Stored pass from localStorage:', pass);
    console.log('Entered name:', nam);
    console.log('Entered email:', em);
    console.log('Entered pass:', pas);

 
    if (nam === '' || em === '' || pas === '') {
        alert("Please fill out all the inputs.");
    } 
    else if (saxeli === nam && email === em && pass === pas) {
        alert('Successful Sign In');
        window.location.href = 'home.html';  
    } 
    else {
        alert("Invalid credentials");
    }
})

