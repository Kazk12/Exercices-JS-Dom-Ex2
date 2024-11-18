const lastname = document.querySelector("#lastname");

lastname.addEventListener("keyup", handleMontreValeur);

function handleMontreValeur(event){
    console.log(event.target.value);
}