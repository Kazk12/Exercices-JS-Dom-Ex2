const lastname = document.querySelector('#lastname');

lastname.addEventListener("focusout", handleFocusLoss);

function handleFocusLoss(){
    alert("Merci de votre participation !")
}