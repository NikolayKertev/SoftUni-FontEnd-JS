function Solve(numberInput, ...params) {
    let N = 5;
    let number = numberInput;
    let array = params;

    for (let i = 0; i < N; i++) {
        switch (array[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                number = number.toFixed(1);
                break;
        }
        console.log(number);
    }
}

Solve ('9', 'dice', 'spice', 'chop', 'bake',

'fillet');