function Solve(input) {
    let pattern = /#(?<result>[A-z]+)/g;

    let matches = input.matchAll(pattern);

    for (const match of matches) {
        console.log(match.groups.result);
    }
}

Solve('The symbol # is known #variously in English-speaking #regions as the #number sign');