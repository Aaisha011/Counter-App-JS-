let add = document.getElementById('add')
let count = document.getElementById('count')

const addnum = (e) => {
    e.preventDefault()
    count.innerText = "1"
    
}
addEventListener("click", addnum)