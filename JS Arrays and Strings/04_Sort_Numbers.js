function Solve(arrayOfNumbers) {
    let array = arrayOfNumbers.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < array.length/2; i++) {
        if (array[i] === array[array.length -1 - i]) {
            result.push(array[i]);
            continue;
        }
        
        result.push(array[i], array[array.length -1 - i]);
    }
    
    return result;
}

console.log(Solve([1, -65, 3, -52, -48, 63, 31, -3, 18]));
