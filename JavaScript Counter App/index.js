//document.getElementById("count-el").innerText=5
let countEl= document.getElementById("count-el")
let count=0

//save

function increment(){
    count+=1
    countEl.innerText=count
    
}


//create a function, save(), which logs out the count when its called
let saveEl= document.getElementById("save-el")
function save(){
    let countStr=count +" - "
    saveEl.innerText+=countStr
    countEl.textContent=0
    count=0

}


