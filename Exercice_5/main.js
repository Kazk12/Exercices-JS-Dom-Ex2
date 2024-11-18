const imgs = document.querySelectorAll(".container img");



imgs.forEach(img => {
    img.addEventListener("mouseover", handleMouseEnter);
    img.addEventListener("mouseout", handleMouseOut);
});

function handleMouseEnter(event){
    let idImage = event.target.id;
    // console.log(idImage);
    // console.log(`./images/${idImage}_2.jpg`)
    event.target.src = `./images/${idImage}_2.jpg`;
};

function handleMouseOut(event){
    let idImage = event.target.id;
    // console.log(idImage);
    // console.log(`./images/${idImage}_2.jpg`)
    event.target.src = `./images/${idImage}.jpg`;
};








  
 