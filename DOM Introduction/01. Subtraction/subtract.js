function subtract() {
    const  firstNumberElement = document.getElementById("firstNumber");
    const  secondNumberElement = document.getElementById("secondNumber");
    const  resultElement = document.getElementById("result");

    resultElement.textContent = firstNumberElement.value - secondNumberElement.value;
}