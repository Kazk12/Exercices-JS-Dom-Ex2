const img = document.querySelector("#image1");

img.addEventListener("mouseover", handleMouseOverImgChange);
img.addEventListener("mouseout", handleMouseOverImgReturn);

function handleMouseOverImgChange(event){
    event.target.src="./images/image1_2.jpg";
    
}

function handleMouseOverImgReturn(event){
    event.target.src="./images/image1.jpg";
}