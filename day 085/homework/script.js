function xmovani(ch){
    for (let i = 0; i < ch.length; i++){
        if (ch[i] === "a"){
            console.log("ეს არის ხმოვანი")
        }
        else if (ch[i] === "e"){
            console.log("ეს არის ხმოვანი")
        }
        else if (ch[i] === "i"){
            console.log("ეს არის ხმოვანი")
        }
        else if (ch[i] === "o"){
            console.log("ეს არის ხმოვანი")
        }
        else if (ch[i] === "u"){
            console.log("ეს არის ხმოვანი")
        }
        else if ("1234567890".includes(ch[i])){
            console.log("რიცხვები არ დაიშვება!")
        }
        else{
            console.log("ეს არის თანხმოვანი")
        }
    }
}

xmovani("a")


