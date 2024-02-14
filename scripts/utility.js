
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}


function addElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}