const bouton = document.querySelector("#Raz");

let textes = document.querySelectorAll("form input");


bouton.addEventListener("click", handleClickSupprimerTexte);

function handleClickSupprimerTexte(){
    textes.forEach((texte) =>{
        console.log(textes)
        texte.value = " ";
    });
};

// function handleClickSupprimerTexte(){
//     textes.forEach(function (texte) {
//         texte.value = " ";
//     })
// }