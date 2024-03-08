function Solve (ageInput) {
    let age = ageInput;
    let personStatus = '';

    if (age >= 66) {
        personStatus = 'elder';
    } else if (age >= 20) {
        personStatus = 'adult';
    } else if (age >= 14) {
        personStatus = 'teenager';
    } else if (age >= 3) {
        personStatus = 'child';
    } else if (age >= 0) {
        personStatus = 'baby';
    } else {
        personStatus = 'out of bounds';
    }

    console.log(personStatus);
}

Solve(20);
Solve(1);
Solve(100);
Solve(-1);