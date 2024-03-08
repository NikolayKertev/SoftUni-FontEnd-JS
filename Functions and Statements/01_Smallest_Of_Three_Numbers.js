function solve(a, b, c) {
    function smallestNumber(a, b) { 
        return a < b ? a : b
    };

    const result = smallestNumber(smallestNumber(a, b), c);

    console.log(result);
}

solve(2, 5, 3);