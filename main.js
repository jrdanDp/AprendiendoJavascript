document.addEventListener('DOMContentLoaded', inicio())


function inicio(){
   let clickImg = document.getElementById("img");
   clickImg.addEventListener("click",cambiarImage);
}

function cambiarImage(){
    let img = document.getElementById("img");
    img.src = "https://i.pinimg.com/736x/10/ca/7b/10ca7bd4dcbd7c507c54ec7eb91e4cdc.jpg"

    let text = document.getElementById("text");
    text.textContent = "CAMBRO";
}