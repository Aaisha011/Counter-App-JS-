

let count_value = 0
let reset = document.querySelector("#reset")
let count = document.querySelector("#count")


reset.addEventListener('click', ()=>{
    count.textContent = count_value
})