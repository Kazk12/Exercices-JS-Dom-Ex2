const img = document.querySelector("#image1");

img.addEventListener("mouseover", handleMouseOverImgChange);

function handleMouseOverImgChange(event){
    event.target.src="./images/image1_2.jpg";
    
}