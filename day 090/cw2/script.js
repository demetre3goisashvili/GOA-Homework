let nm = document.getElementById("nm"); // Username input for signup
let pizika = document.getElementById("pizika"); 
let matematika = document.getElementById("matematika"); 
let kartuli = document.getElementById("kartuli"); 
let inglisuri = document.getElementById("inglisuri");
let pass = document.getElementById("pass"); 
let signup = document.getElementById("signup"); 

let name = document.getElementById("name"); 
let password = document.getElementById("password"); 
let signin = document.getElementById("signin");

let base = new Map(); 

signup.addEventListener("click", function () {
  if (nm.value !== "" && pass.value !== "" && !base.has(nm.value)) {
    base.set(nm.value, {
      password: pass.value,
      scores: [
        Number(pizika.value),
        Number(matematika.value),
        Number(kartuli.value),
        Number(inglisuri.value),
      ],
    });
    alert("წარმატებული რეგისტრაცია!");
  } else {
    alert("ამ სახელით რეგისტრაცია უკვე არსებობს ან ველები ცარიელია.");
  }
});

signin.addEventListener("click", function () {
    const userData = base.get(name.value);
  
    if (userData && userData.password === password.value) {
      const scores = userData.scores;
  
      let scoresContainer = document.createElement("div");
      scoresContainer.id = "scorecontainer";
  
      let title = document.createElement("h3");
      title.textContent = `${nm.value}-ს საშუალო ქულები`;
      scoresContainer.appendChild(title);
  
      let physicsScore = document.createElement("p");
      physicsScore.textContent = `ფიზიკა: ${scores[0]}`;
      scoresContainer.appendChild(physicsScore);
  
      let mathScore = document.createElement("p");
      mathScore.textContent = `მათემატიკა: ${scores[1]}`;
      scoresContainer.appendChild(mathScore);
  
      let georgianScore = document.createElement("p");
      georgianScore.textContent = `ქართული: ${scores[2]}`;
      scoresContainer.appendChild(georgianScore);
  
      let englishScore = document.createElement("p");
      englishScore.textContent = `ინგლისური: ${scores[3]}`;
      scoresContainer.appendChild(englishScore);
  
      document.body.appendChild(scoresContainer);
  
      let avarageTitle = document.createElement("h3");
      avarageTitle.textContent = "საშუალო ქულა";
      scoresContainer.appendChild(avarageTitle);
  
      let avarageScore = scores[0] + scores[1] + scores[2] + scores[3];
      let calc = avarageScore / 4;
      let avaragedisplay = document.createElement("p");
      avaragedisplay.textContent = `${nm.value}-ს საშუალო ქულა არის ${calc}`;
      scoresContainer.appendChild(avaragedisplay);
  
      let changeTitle = document.createElement("h3");
      changeTitle.textContent = "შეცვალე ქულა";
      scoresContainer.appendChild(changeTitle);
  
      let changeSubject = document.createElement("input");
      scoresContainer.appendChild(changeSubject);
      changeSubject.id = "changesub";
      $('#changesub').attr('placeholder', 'საგანი');
      changeSubject.style.padding = "10px";
  
      
      changeSubject.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          console.log(event)
          let subject = changeSubject.value;  
          
          let changeScore;
          if (subject === "ფიზიკა") {
            changeScore = prompt("ჩაწერე ახალი ქულა ფიზიკისთვის:");
            scores[0] = Number(changeScore);  
            physicsScore.textContent = `ფიზიკა: ${scores[0]}`;  
          } else if (subject === "მათემატიკა") {
            changeScore = prompt("ჩაწერე ახალი ქულა მათემატიკისთვის:");
            scores[1] = Number(changeScore);  
            mathScore.textContent = `მათემატიკა: ${scores[1]}`;  
          } else if (subject === "ქართული") {
            changeScore = prompt("ჩაწერე ახალი ქულა ქართულისთვის:");
            scores[2] = Number(changeScore);  
            georgianScore.textContent = `ქართული: ${scores[2]}`;  
          } else if (subject === "ინგლისური") {
            changeScore = prompt("ჩაწერე ახალი ქულა ინგლისურისთვის:");
            scores[3] = Number(changeScore);  // 
            englishScore.textContent = `ინგლისური: ${scores[3]}`; 
          } else {
            alert("საგანი არ არის ბაზაში, ხელახლა ცადეთ!");
          }
  
         
          let totalScore = scores[0] + scores[1] + scores[2] + scores[3];
          let average = totalScore / 4;
          avaragedisplay.textContent = `${nm.value}-ს საშუალო ქულა არის ${average}`;
        }
      });
    } else {
      alert("არასწორი სახელი ან პაროლი.");
    }
  });