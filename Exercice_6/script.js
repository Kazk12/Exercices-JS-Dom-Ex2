const imgs = document.querySelectorAll("img");



imgs.forEach(img => {
    img.addEventListener("mouseover", handleMouseEnter);
    img.addEventListener("mouseout", handleMouseOut);
});

// let toggle = true;


function handleMouseEnter(event){
    let idImage = event.target.id;
    
    // if(toggle == true){
    //     event.target.src = `./images/${idImage}_2.jpg`;
    // }  if (toggle == false){
    //     event.target.src = `./images/${idImage}.jpg`;
    // }
    // toggle = !toggle;
    // console.log(toggle);
    console.log(idImage);
    console.log(`./images/${idImage}_2.jpg`)
    event.target.src = `./images/${idImage}_2.jpg`;
};

function handleMouseOut(event){
    let idImage = event.target.id;
    // console.log(idImage);
    // console.log(`./images/${idImage}_2.jpg`)
    event.target.src = `./images/${idImage}.jpg`;
};