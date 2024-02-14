
function continueGame() {
    const alphabet = getRandomNumber();
    const displayAlphabet = document.getElementById("display");
    displayAlphabet.innerText = alphabet.toUpperCase();
    addBackgroundId(alphabet);

}




function play() {
    removeElement("home");
    addElement("play-ground")
    continueGame()
}


