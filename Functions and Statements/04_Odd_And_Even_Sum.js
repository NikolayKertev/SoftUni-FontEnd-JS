function solve(number) {
    let arrayOfNumbers = number.toString().split('');

    console.log(`Odd sum = ${oddSum(arrayOfNumbers)}, Even sum = ${evenSum(arrayOfNumbers)}`);
}

function evenSum(numbers){
    let evenNumbersArray =  numbers.filter(number => number % 2 === 0);
    return evenNumbersArray.reduce((acc, number) => acc + Number(number), 0);
}

function oddSum(numbers){
    let evenNumbersArray =  numbers.filter(number => number % 2 === 1);
    return evenNumbersArray.reduce((acc, number) => acc + Number(number), 0);
}

solve(3495892137259234);