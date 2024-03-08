function solve(loadingNumber) {
    loadingRenderer(loadingNumber);
    loadingStatus(loadingNumber);
}

function loadingRenderer(number) {
    console.log(`${number}% [${'%'.repeat(number / 10)}${'.'.repeat(10 - number / 10)}]`);
}

function loadingStatus(number) {
    console.log(number === 100 ? "Complete!" : "Still loading...");
}

solve(59);