function Solve(arrayOfNumbers, nthCount) {
    let array = arrayOfNumbers;
    let count = nthCount;
    let resultArray = [];

    for (let i = 0; i < array.length; i += count) {
        resultArray.push(array[i]);
    }

    return resultArray;
}

console.log(Solve(['5',

'20',

'31',

'4',

'20'],

3));