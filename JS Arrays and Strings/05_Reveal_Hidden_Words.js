function Solve (inputWord, inputArray) {
    let array = inputArray.split(' ');
    let wordArray = inputWord.split(', ')
    let result = [];

    for (let word of array) {
        if (word.includes('*'.repeat(word.length))) {
            for (let item of wordArray) {
                if(item.length === word.length) {
                    word = item;
                };
            }
        }

        result.push(word);
    }

    console.log(result.join(' '));
}

Solve('great, learning', 'softuni is ***** place for ******** new programming languages');