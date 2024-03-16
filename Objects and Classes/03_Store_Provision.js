function solve(currentStorage, incomingOrder) {
    let storage = {};

    storage = addProductsToStorage(storage, currentStorage);
    storage = addProductsToStorage(storage, incomingOrder);

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }
}

function addProductsToStorage(storage, storageType) {
    for (let i = 0; i < storageType.length; i += 2) {
        const foodType = storageType[i];
        const foodAmount = storageType[i + 1];

        if (!storage[foodType]) {
            storage[foodType] = 0;
        }

        storage[foodType] += Number(foodAmount);
    }

    return storage;
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );