function solve(input) {
    let collectionOfWords = {};
    let [wordsNeeded, ...wordsArray] = input;
    wordsNeeded = wordsNeeded.split(' ');

    wordsNeeded.forEach(word => collectionOfWords[word] = 0);

    wordsArray.forEach(word => {
        if (collectionOfWords[word] || collectionOfWords[word] === 0) {
            collectionOfWords[word] += 1;
        }
    });

    const sortedResult = Object.entries(collectionOfWords).sort((a, b) => b[1] - a[1]);

    const result = Object.fromEntries(sortedResult);

    for (const word in result) {
        console.log(`${word} - ${result[word]}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);