const img = document.querySelector("#image1");

img.addEventListener("mouseover", handleImgChange);

function handleImgChange(event){
    event.target.src="./images/image1_2.jpg";
    
}