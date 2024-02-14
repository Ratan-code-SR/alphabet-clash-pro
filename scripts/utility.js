
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}


function addElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getRandomNumber(){
    const alphabetString = "abcdefgijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    // console.log(alphabetArray);

    // get random number 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(alphabetArray[index]);
  return alphabetArray[index];

}

function addBackgroundId (elementID){
    const element =  document.getElementById(elementID);
    element.classList.add("bg-red-500");
}
