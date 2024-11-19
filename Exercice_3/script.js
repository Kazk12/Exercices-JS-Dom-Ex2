const lastname = document.querySelector("#lastname");

lastname.addEventListener("keyup", handleKeyupMontreValeur); // Ou input(quand on met un truc dans un textarea et autre chose) à la place de keyup

function handleKeyupMontreValeur(event){
    console.log(event.target.value);
}