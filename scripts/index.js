
function handelKeyboardButtonPress(e) {
    const playerPressed = e.key;
    // console.log(playerPressed);
    // stop the game pres home
    if (playerPressed === '1') {
        gameOver()
    }
    // get the expected get element
    const currentAlphabetElement = document.getElementById("display")
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedOutput = currentAlphabet.toLocaleLowerCase();

    if (playerPressed === expectedOutput) {
        const scoreElement = getDisplayElement("display-score");
        const updatedScore = scoreElement + 1;
        setTextElementById("display-score", updatedScore);
        removeBackgroundId(expectedOutput)
        continueGame()

    } else {
        const lifeElement = getDisplayElement("life-element");
        const updatedLife = lifeElement - 1;
        setTextElementById("life-element", updatedLife)

        if (updatedLife === 0) {
            gameOver();

        }
    }

}


document.addEventListener("keyup", handelKeyboardButtonPress)



function continueGame() {
    const alphabet = getRandomNumber();
    const displayAlphabet = document.getElementById("display");
    displayAlphabet.innerText = alphabet.toUpperCase();
    addBackgroundId(alphabet);

}

function play() {
    // hide every element show only play-ground
    removeElement("home");
    addElement("play-ground")
    removeElement("scroll-element");
    // reset 
    setTextElementById("life-element", 5)
    setTextElementById("display-score", 0)
    continueGame()
}

function gameOver() {
    removeElement("play-ground");
    addElement("scroll-element")

    // get last score
    const lastScore = getDisplayElement("display-score");
    setTextElementById("final-score", lastScore);

    // clear the last selected alphabet
    const currentElement = getElementTextById("display");
    removeBackgroundId(currentElement.toLocaleLowerCase());

}

