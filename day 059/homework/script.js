function heyhey(event){
    event.preventDefault();
    let smth = document.getElementsById("name")
    let smth1 = document.getElementsById("email")
    let smth2 = document.getElementsById("pass")

    let sub = document.getElementsByClassName("submit")

    if (smth === "" || smth1 === "" || smth2 === "" ){
        sub.onclick(alert("Your password is not right"));
    }
    else {
        console.log("Full name", smth)
        console.log("Email", smth1)
        console.log("Password", smth2)
    }
}



let iadad = document.getElementById("buto")

// martla vcade magram ver gavakete martla



