let nm = document.getElementById("nm");
let pizika = document.getElementById("pizika");
let matematika = document.getElementById("matematika");
let kartuli = document.getElementById("kartuli");
let inglisuri = document.getElementById("inglisuri");
let sash = document.getElementById("sash");


let base = new Map();

sash.addEventListener("click", function () {

    let name = nm.value.trim();
    let grades = [
        Number(pizika.value),
        Number(matematika.value),
        Number(kartuli.value),
        Number(inglisuri.value)
    ];


    if (!name) {
        alert("გთხოვთ, ჩაწერეთ სტუდენტის სახელი.");
        return;
    }

   
    if (grades.some(isNaN)) {
        alert("გთხოვთ, შეავსეთ ყველა ქულა სწორად.");
        return;
    }

   
    base.set(name, grades);

   
    let jami = grades.reduce((sum, grade) => sum + grade, 0);
    let calc = jami / grades.length;

   
    let calcshow = document.createElement("p");
    calcshow.textContent = `${name}-ის საშუალო ქულა: ${calc}`;
    document.body.appendChild(calcshow);
});




