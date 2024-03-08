function SolveDefault(input) {
    let pattern = /[A-Z][a-z]*/g;
    let matches = input.matchAll(pattern);
    let result = [];

    for (const match of matches) {
        result.push(match);
    }

    console.log(result.join(', '));
}

function SolveIntelligent(input) {
    let pattern = /(?=[A-Z])/g;
    let result = input.split(pattern).join(', ');

    console.log(result);
}

SolveDefault('ThisIsSoAnnoyingToDo');
SolveIntelligent('ThisIsSoAnnoyingToDo');