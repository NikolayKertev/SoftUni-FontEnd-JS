function solve(a, b, c) {
    const sumResult = (a, b) => a + b;
    const subtractResult = (a, b , c) => sumResult(a, b) - c;

    console.log(subtractResult(a, b, c));
}

solve(23, 6, 10);