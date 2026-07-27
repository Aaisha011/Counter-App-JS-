let add = document.getElementById('add')
let count = document.getElementById('count')

const addnum = (e) => {
    e.preventDefault()
    count.innerText = "1"
    
}
addEventListener("click", addnum)


let reset = document.querySelector("#reset")


reset.addEventListener('click', ()=>{
    count.textContent = 0
})
