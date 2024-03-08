function solve(firstChar, secondChar) {
    const startChar = (firstChar, secondChar) => firstChar < secondChar? firstChar : secondChar;

    const charDistance = (firstChar, secondChar) => firstChar.charCodeAt(0) > secondChar.charCodeAt(0) ? 
                                                    firstChar.charCodeAt(0) - secondChar.charCodeAt(0) : secondChar.charCodeAt(0) - firstChar.charCodeAt(0);

    let result = charsInRangeGenerator(startChar(firstChar, secondChar), charDistance(firstChar, secondChar)).split('').join(' ');
    console.log(result);
}

function charsInRangeGenerator(start, distance) {
    let array = [];

    for (let i = 1; i < distance; i++) {
        array.push(i + start.charCodeAt(0));
    }

    return String.fromCharCode(...array);
}

solve('#', 'C');