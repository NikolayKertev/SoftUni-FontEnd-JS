function solve(a, b) {
    console.log((factoriel(a) / factoriel(b)).toFixed(2));
}

function factoriel(number) {
    return number > 0 ? number * factoriel(number - 1) : 1;
};

solve(5, 2);
solve(6, 2);