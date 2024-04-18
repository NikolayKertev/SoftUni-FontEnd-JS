function encodeAndDecodeMessages() {
    const inputMessageElement = document.querySelector('textarea:first-of-type');
    const encodeButtonElement = inputMessageElement.nextElementSibling;
    const outputMessageElement = document.querySelector('textarea[disabled]');
    const decodeButtonElement = outputMessageElement.nextElementSibling;

    let isDecrypted = true;

    encodeButtonElement.addEventListener('click', (e) => {

        let messageToEncrypt = inputMessageElement.value;
        let encryptedMessage = [];

        console.log(messageToEncrypt);

        for (let i = 0; i < messageToEncrypt.length; i++) {
            let charToPush = (messageToEncrypt[i].charCodeAt(0)) + 1;
            encryptedMessage.push(String.fromCharCode(charToPush));
        }

        outputMessageElement.value = encryptedMessage.join('');
        inputMessageElement.value = ''
        isDecrypted = false;
    })

    decodeButtonElement.addEventListener('click', (e) => {

        if (isDecrypted === true) {
            return;
        }

        let messageToDecrypt = outputMessageElement.value;
        let decryptedMessage = [];

        console.log(messageToDecrypt);

        for (let i = 0; i < messageToDecrypt.length; i++) {
            let charToPush = (messageToDecrypt[i].charCodeAt(0)) - 1;
            decryptedMessage.push(String.fromCharCode(charToPush));
        }

        outputMessageElement.value = decryptedMessage.join('');
        isDecrypted = true;
    })
}