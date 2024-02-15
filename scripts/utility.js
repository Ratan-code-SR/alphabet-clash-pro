
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}


function addElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getRandomNumber() {
    const alphabetString = "abcdefgijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    // console.log(alphabetArray);

    // get random number 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(alphabetArray[index]);
    return alphabetArray[index];

}

function addBackgroundId(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("bg-red-500");
}
function removeBackgroundId(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove("bg-red-500");
}


/* score function */
// display-score
function getDisplayElement(elementId) {
    const scoreOrLifeElement = document.getElementById(elementId);
    const elementValue = scoreOrLifeElement.innerText;
    const displayValue = parseInt(elementValue);

    return displayValue;
}

/*  */
function setTextElementById(element, value) {
    const currentElement = document.getElementById(element);
    currentElement.innerText = value;
}

/*  */
function getElementTextById(elementID) {
    const elementText = document.getElementById(elementID);
    const text = elementText.innerText;
    return text;

}