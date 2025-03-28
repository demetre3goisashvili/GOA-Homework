let main = document.querySelector('main')
// 1
let input = document.createElement('input')
let button = document.createElement('button')
button.textContent = 'multiplication table'
let div = document.createElement('div')
main.appendChild(div)
main.appendChild(input)
main.appendChild(button)

button.addEventListener('click', ()=>{
    function multiplicationTable(){
        div.innerHTML = `
        <p>${Number(input.value *1)} ${Number(input.value *2)} ${Number(input.value *3)} ${Number(input.value *4)} ${Number(input.value *5)} ${Number(input.value *6)} ${Number(input.value *7)} ${Number(input.value *8)} ${Number(input.value *9)} ${Number(input.value *10)}</p>
        `
    }
    multiplicationTable()
})





// 2



let input1 = document.createElement('input')
let button1 = document.createElement('button')
button1.textContent = 'click me'
main.appendChild(input1)
main.appendChild(button1)
const randomNum = Math.floor(Math.random() * 10) + 1;
button1.addEventListener('click', ()=>{
    if (randomNum > Number(input1.value)){
        alert('higher')
    }
    if (randomNum < Number(input1.value)){
        alert('lower')
    }else{
        alert('congrats')
    }
    
})



// 3

let input2 = document.createElement('input')
let button2 = document.createElement('button')
button2.textContent = 'add'
main.appendChild(input2)
main.appendChild(button2)

button2.addEventListener('click', ()=>{
    let task = document.createElement('p')
    let washla = document.createElement('button')
    task.textContent = input2.value.trim()
    main.appendChild(task)

    washla.textContent = 'delete ts'
    task.appendChild(washla)
    washla.addEventListener('click', ()=>{
        task.remove()
    })
})








