//This is how to select elements
//When we click on the body any where on the page
//We are going to change the color of the text
document.body.addEventListener("click",function(event){
    var header = document.querySelector(".build h1")
    console.log(header)
    header.style.color="blue"
})
