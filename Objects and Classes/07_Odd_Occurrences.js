function solve(input) {
    let wordsObject = new wordCollection();
    input.split(' ').forEach(word => wordsObject.AddWord(word.toLowerCase()));

    let result = [];

    const resultArray = wordsObject.GetFilteredWords();
    resultArray.forEach(w => result.push(w.name));

    console.log(result.join(' '));
}

class wordCollection{
    constructor() {
        this.wordArray = [];
    }

    AddWord(word){
        if (!this.CheckForExistance(word)) {
            let currentWord = new Word(word);
            this.wordArray.push(currentWord);
        }

        this.wordArray.some(w => w.name === word ? w.counter++ : 0);
    }

    CheckForExistance(word){
        if (this.wordArray.findIndex(w => w.name === word) === -1) {
            return false;
        }

        return true;
    }

    GetFilteredWords(){
        /* return this.wordArray; */
        return this.wordArray.filter(w => w.counter % 2 === 1);
    }
}

class Word{
    constructor(word){
        this.name = word;
        this.counter = 0;
    }
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');