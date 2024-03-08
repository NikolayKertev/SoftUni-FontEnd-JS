function Solve(arrayOfNames = [' ']) {
    arrayOfNames.sort((name1, name2) => name1.localeCompare(name2));

    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log(`${i + 1}.${arrayOfNames[i]}`);
    }
}

Solve(["John", "bob", "Christina", "Ema"]);