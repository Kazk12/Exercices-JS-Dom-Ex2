const lastname = document.querySelector('#lastname');

lastname.addEventListener("focusout", handleFocusoutEnDehorsDeLaDiv);

function handleFocusoutEnDehorsDeLaDiv(){
    alert("Merci de votre participation !")
}