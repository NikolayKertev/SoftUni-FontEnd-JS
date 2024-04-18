function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const messageAreaElement = document.getElementById('messages');
    const authorNameElement = document.querySelector('input[name=author]');
    const messageElement = document.querySelector('input[name=content]');

    const sendButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');


    refreshButtonElement.addEventListener('click', () => {

        reloadChat();
    });

    sendButtonElement.addEventListener('click', () => {
        const authorName = authorNameElement.value;
        const message = messageElement.value;

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                author: authorName,
                content: message,
            })
        })
            .then(response => console.log(response))
            .catch(() => console.log('Error in adding messages!'));

            authorNameElement.value = '';
            messageElement.value = '';

/*         reloadChat(); */
    });

    function reloadChat() {
        fetch(baseUrl)
        .then(response => response.json())
        .then(messages => {
            messageAreaElement.textContent = "";
            let counter = 1;

            const messagesArray = Object.values(messages);

            messagesArray.forEach(message => {
                if (counter === messagesArray.length) {
                    messageAreaElement.textContent += `${message.author}: ${message.content}`;
                } else {
                    messageAreaElement.textContent += `${message.author}: ${message.content}\n`;
                }
                counter++;
            });

        })
    }
}

attachEvents();