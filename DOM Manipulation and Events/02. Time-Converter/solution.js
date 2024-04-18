function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type=button]');
    const valueElements = document.querySelectorAll('input[type=text]');

    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', (e) => {
            const valueElement = buttonElement.previousElementSibling;
            const dayType = valueElement.getAttribute('id');
            const value = valueElement.value;
            const seconds = convertToSeconds(dayType, value);
            let power = 3;

            for (const valueElement of valueElements) {
                let sum = 0; 

                if (power === 3) {
                    sum = seconds / Math.pow(60, power - 1) / 24;

                } else {
                    sum = seconds / Math.pow(60, power);
                }

                valueElement.value = sum;
                power--;
            }
        })
    }
}

function convertToSeconds(dayType, value) {
    switch (dayType) {
        case 'days':
            return value * 24 * 60 * 60;
            break;
        case 'hours':
            return value * 60 * 60;
            break;
        case 'minutes':
            return value * 60;
            break;
        case 'seconds':
            return value;
            break;
    }
}