function solve(number) {
    console.log(`${isPerfect(number) ? "We have a perfect number!" : "It's not so perfect."}`);
}

function isPerfect(number) {
    let sum = 0;

    for (let i = number - 1; i > 0; i--) {
        number % i === 0 ? sum += i : 0;
    }

    return sum === number? true : false;
}

solve(1236498);