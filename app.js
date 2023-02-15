
let input = document.querySelectorAll(".input-group")
const submit = document.querySelector("#submit-btn")
input.forEach((item)=>{

    item.addEventListener("input",(e)=>{
        
        if(e.target.value){
              
            e.target.parentElement.lastElementChild.classList.add("active") 
        }
        else{
            e.target.parentElement.lastElementChild.classList.remove("active") 
        }
    })
}) 
function clearInput(){
    document.querySelector(".input").value = ""
    document.querySelector(".input1").value= ""
    document.querySelector(".input2").value = ""
    document.getElementsByTagName("label").classList.remove("active")
}

submit.addEventListener("click",(e)=>{
   let name = document.querySelector(".input").value
   let surname = document.querySelector(".input1").value
   let mail = document.querySelector(".input2").value
   
   alert(`Hello ${name} ${surname}, Your E-mail ${mail}`)
   clearInput()
   e.preventDefault()
   
})
  


    

