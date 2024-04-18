window.addEventListener("load", solve);

function solve() {
    const nameInputElement = document.getElementById('name');
    const phoneInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const ulCheckListElement = document.getElementById('check-list');
    const ulIdListElement = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', (e) => {
        let name = nameInputElement.value;
        let phone = phoneInputElement.value;
        let category = categoryInputElement.value;

        if (!name || !phone || !category) {
            return;
        }

        addElementToCheck(name, phone, category);

        const editBtnElement = document.querySelector('.edit-btn');

        editBtnElement.addEventListener('click', (e) => {
            ulCheckListElement.innerHTML = '';

            nameInputElement.value = name;
            phoneInputElement.value = phone;
            categoryInputElement.value = category;
        })

        const saveBtnElement = document.querySelector('.save-btn');

        saveBtnElement.addEventListener('click', (e) => {
            const liElement = ulCheckListElement.querySelector('li');

            ulIdListElement.appendChild(liElement);

            const buttonDivElement = document.querySelector('.buttons');

            buttonDivElement.remove();

            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('del-btn');

            liElement.appendChild(deleteBtnElement);

            deleteBtnElement.addEventListener('click', (e) => {
                liElement.remove();
            })
        })
    })

    function addElementToCheck(nameInput, phoneInput, categoryInput) {
        const nameElement = document.createElement('p');
        nameElement.textContent = `name:${nameInput}`;

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `phone:${phoneInput}`;

        const categoryElement = document.createElement('p');
        categoryElement.textContent = `category:${categoryInput}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(nameElement);
        articleElement.appendChild(phoneElement);
        articleElement.appendChild(categoryElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');

        const saveBtnElement = document.createElement('button');
        saveBtnElement.classList.add('save-btn');

        const buttonDivElement = document.createElement('div');
        buttonDivElement.classList.add('buttons');
        buttonDivElement.appendChild(editBtnElement);
        buttonDivElement.appendChild(saveBtnElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonDivElement);

        ulCheckListElement.appendChild(liElement);

        nameInputElement.value = '';
        phoneInputElement.value = '';
        categoryInputElement.value = '';
    }
}
