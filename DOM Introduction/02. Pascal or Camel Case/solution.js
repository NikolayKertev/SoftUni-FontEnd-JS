function solve() {
    const textElement = document.getElementById("text");
    const namingConventionElement = document.getElementById("naming-convention");
    const resultElement = document.getElementById("result");

    let textInput = textElement.value.split(" ").map(sentence => sentence.toLowerCase());
    let tempString = "";
    switch (namingConventionElement.value) {
        case "Camel Case":
            tempString += textInput[0];
            tempString += textInput.splice(1).map(sentence => sentence[0].toUpperCase() + sentence.slice(1)).join("");
            resultElement.textContent = tempString;
            break;
        case "Pascal Case":
            tempString += textInput.map(sentence => sentence[0].toUpperCase() + sentence.slice(1)).join("");
            resultElement.textContent = tempString;
            break;
        default:
            const errorMessage = "Error!";
            resultElement.textContent = errorMessage;
            break;
    }
}