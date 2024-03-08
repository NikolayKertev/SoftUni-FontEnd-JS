function Solve(personAmount, personType, dayType) {
    let amount = personAmount;
    let type = personType;
    let day = dayType;
    let sum = personAmount;
    let price = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                price = 8.45;
                sum = amount * price;
            }
            if (type === 'Business') {
                price = 10.9;
                sum = amount * price;
            }
            if (type === 'Regular') {
                price = 15;
                sum = amount * price;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                price = 9.8;
                sum = amount * price;
            }
            if (type === 'Business') {
                price = 15.6;
                sum = amount * price;
            }
            if (type === 'Regular') {
                price = 20;
                sum = amount * price;
            }
            break;
        case 'Sunday':
            if (type === 'Students') {
                price = 10.46;
                sum = amount * price;
            }
            if (type === 'Business') {
                price = 16;
                sum = amount * price;
            }
            if (type === 'Regular') {
                price = 22.5;
                sum = amount * price;
            }
            break;
    }

    if (type === 'Students' && amount >= 30) {
        sum *= 0.85;
    } else if (type === 'Business' && amount >= 100) {
        sum -= 10 * price;
    } else if (type === 'Regular' && amount >= 10 && amount <= 20) {
        sum *= 0.95;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

Solve(30,

    "Students",

    "Sunday");

Solve(40,

    "Regular",

    "Saturday");