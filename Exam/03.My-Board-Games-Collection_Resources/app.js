window.addEventListener("load", refreshPage);

const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesBtnElement = document.getElementById('load-games');
const gamesListElement = document.getElementById('games-list');
const addGameBtnElement = document.getElementById('add-game');
const editGameBtnElement = document.getElementById('edit-game');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');

let currentId = '';

loadGamesBtnElement.addEventListener('click', (e) => {
   refreshPage();
})

addGameBtnElement.addEventListener('click', (e) => {
    const nameInput = nameInputElement.value;
    const typeInput = typeInputElement.value;
    const countInput = playersInputElement.value;

    if (nameInput === '' || typeInput === '' || countInput === '') {
        return;
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput,
            type: typeInput,
            players: countInput
        })
    })

    refreshPage();

    clearInput();
})

function createBoardGame(name, type, count, id) {
    const nameElement = document.createElement('p');
    nameElement.textContent = name;

    const typeElement = document.createElement('p');
    typeElement.textContent = type;

    const countElement = document.createElement('p');
    countElement.textContent = count;

    const divContentElement = document.createElement('div');
    divContentElement.classList.add('content');

    divContentElement.appendChild(nameElement);
    divContentElement.appendChild(typeElement);
    divContentElement.appendChild(countElement);

    const changeBtnElement = document.createElement('button');
    changeBtnElement.classList.add('change-btn');
    changeBtnElement.textContent = 'Change';
    changeButtonAddEventListener(changeBtnElement, name, type, count, id);

    const deleteBtnElement = document.createElement('button');
    deleteBtnElement.classList.add('delete-btn');
    deleteBtnElement.textContent = 'Delete';
    deleteButtonAddEventListener(deleteBtnElement, id);

    const btnDivElement = document.createElement('div');
    btnDivElement.classList.add('buttons-container');

    btnDivElement.appendChild(changeBtnElement);
    btnDivElement.appendChild(deleteBtnElement);

    const divGameContainerElement = document.createElement('div');
    divGameContainerElement.classList.add('board-game');

    divGameContainerElement.appendChild(divContentElement);
    divGameContainerElement.appendChild(btnDivElement);

    gamesListElement.appendChild(divGameContainerElement);

    editGameBtnElement.setAttribute('Disabled', 'Disabled')
}

function changeButtonAddEventListener(changeBtnElement, name, type, count, id) {
    changeBtnElement.addEventListener('click', (e) => {
        nameInputElement.value = name;
        typeInputElement.value = type;
        playersInputElement.value = count;
        currentId = id;

        editGameBtnElement.removeAttribute('Disabled');
        addGameBtnElement.setAttribute('Disabled', 'Disabled');

        editGameBtnElement.addEventListener('click', (e) => {
            EditElement();

            addGameBtnElement.removeAttribute('Disabled');
            editGameBtnElement.setAttribute('Disabled', 'Disabled');

            refreshPage();
        })

        function EditElement() {
            const nameInput = nameInputElement.value
            const typeInput = typeInputElement.value
            const countInput = playersInputElement.value


            fetch(`${baseUrl}/${currentId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInput,
                    type: typeInput,
                    players: countInput
                })
            })
        }

    }
    )
}

function deleteButtonAddEventListener(deleteBtnElement, id) {
    deleteBtnElement.addEventListener('click', (e) => {
        currentId = id;

        refreshPage();

        fetch(`${baseUrl}/${currentId}`, {
            method: 'DELETE'
        })
    }
    )
}

function refreshPage() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        const boardGames = Object.values(data);

        clearInput();

        gamesListElement.innerHTML = '';

        boardGames.forEach(game => {
            const gameName = game.name;
            const gameType = game.type;
            const playerCount = game.players;
            const currentId = game._id;

            createBoardGame(gameName, gameType, playerCount, currentId);
        });
    })
}

function clearInput(){
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}