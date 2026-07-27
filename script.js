let sub = document.getElementById('sub')
let count = document.getElementById('count')

const subnum = (e) => {
   count--

}
sub.addEventListener('click', subnum)
let add = document.getElementById('add')

const addnum = (e) => {
    e.preventDefault()
    count.innerText = "1"
    
}
addEventListener("click", addnum)


let reset = document.querySelector("#reset")


reset.addEventListener('click', ()=>{
    count.textContent = 0
})
