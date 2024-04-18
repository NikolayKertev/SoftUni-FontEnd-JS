function lockedProfile() {
    const buttonElements = document.querySelectorAll('button');

    for (const buttonElement of buttonElements) {
        const lockedElement = buttonElement.parentElement.querySelector('input[type=radio][value=lock]');
        const hiddenElement = buttonElement.parentElement.querySelector('div:last-of-type');

        buttonElement.addEventListener('click', (e) => {
            if (lockedElement.checked) {
                return;
            }

            if (buttonElement.textContent === "Show more") {
                hiddenElement.style.display = "block";
                buttonElement.textContent = "Hide it";
            } else {
                hiddenElement.style.display = "none";
                buttonElement.textContent = "Show more";
            }
        })
    }
}