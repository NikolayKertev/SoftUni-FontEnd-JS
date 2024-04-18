function toggle() {
    const buttonElement = document.querySelector(".button");
    const textElement = document.getElementById("extra");

    switch (buttonElement.textContent) {
        case "More":
        textElement.style.display = "block";
        buttonElement.textContent = "Less"
            break;
        case "Less":
            textElement.style.display = "none";
            buttonElement.textContent = "More"
            break;
    }
}