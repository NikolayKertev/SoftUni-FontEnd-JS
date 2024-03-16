function solve(input) {
    const parkingObj = {};

    input.forEach(item => {
        const [command, carNumber] = item.split(', ');
        parkingObj[carNumber] = command;
    })

    let result = Object.entries(parkingObj).sort((a, b) => Comperator(a[0], b[0]));

    if (result.findIndex(item => item[1] === "IN") === -1) {
        console.log('Parking Lot is Empty');
        return;
    }
    result.forEach(item => {
        if (item[1] === "IN") {
            console.log(item[0])
        }
    });


}

function Comperator(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            continue;
        } else if (word1[i] < word2[i]) {
            return -1;
        }

        return 1;
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);