const box1 = document.getElementById("#div1").addEventListener("click", function(){alert("Hello");})
const box2 = document.getElementById("#div2").addEventListener("click", function(){alert("Hello");})
const box3 = document.getElementById("#div3").addEventListener("click", function(){alert("Hello");})

const mainCar = document.querySelector('img')
const perv = document.querySelector("#prev")
const next = document.querySelector("#next")

const carArr = ["car1.png", "car2.png", "car3.png", "car4.png", "car5.png"]

index1 = 0

next.addEventListener('click', function() {
    index1++;

    if(index1 >= carArr.length) {
        index1 = 0;
    }

    img.src = carArr[index1];
});

prev.addEventListener('click', function() {
    index1--;

    if(index1 < 0) {
        index1 = 2;
    }
    
    img.src = carArr[index1];
});

