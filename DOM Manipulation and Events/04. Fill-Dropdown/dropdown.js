function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const valueInputElement = document.getElementById('newItemValue');
    const buttonElement = document.querySelector('input[type=button]');
    const menuElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value;
    textInputElement.value = '';

    optionElement.value = valueInputElement.value;
    valueInputElement.value = '';

    menuElement.appendChild(optionElement);
}