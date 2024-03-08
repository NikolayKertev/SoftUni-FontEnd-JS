function solve(rowAndColCount) {
    let matrix = new Array(rowAndColCount);
    matrix.fill(rowAndColCount);
    matrixPrint(matrix, rowAndColCount);
}

function matrixPrint(array, count) {
    for (let i = 0; i < count; i++) {
        console.log(array.join(' '));
    }
}

solve(8);