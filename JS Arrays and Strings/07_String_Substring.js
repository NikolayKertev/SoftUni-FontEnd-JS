function Solve(word, inputString) {
    let text = inputString.split(' ');

    for (const item of text) {
        if (item.length === word.length) {
            if (item.toLocaleLowerCase().includes(word)) {
                return console.log(word);
            }
        }
    }

    console.log(`${word} not found!`);
}

Solve('javascript', 'JavaScript is the best programming language');