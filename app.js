const smallImg = document.querySelectorAll(".gallery img")
const fullImg = document.querySelector(".full-images")
const modal = document.querySelector(".modal")
//console.log(smallImg)
smallImg.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        //alert(fullsize)
        const path = `foods-images/full/${fullsize}.jpg`
        //alert(path)
        fullImg.src = path
        modal.classList.add("open")
    })
})
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})