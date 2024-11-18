const lastname = document.querySelector("#lastname");

lastname.addEventListener("keyup", handleKeyupMontreValeur);

function handleKeyupMontreValeur(event){
    console.log(event.target.value);
}