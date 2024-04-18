function attachEventsListeners() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const inputDistanceTypeElement = document.getElementById('inputUnits');

    const buttonElement = document.getElementById('convert');

    const outputDistanceElement = document.getElementById('outputDistance');
    const outputDistanceTypeElement = document.getElementById('outputUnits');

    buttonElement.addEventListener('click', (e) => {
        const inputDistanceValue = inputDistanceElement.value;
        const inputDistanceType = inputDistanceTypeElement.value;

        const distanceInMetres = convertToMetres(inputDistanceValue, inputDistanceType);

        const outputDistanceType = outputDistanceTypeElement.value;

        const distanceResult = convertToType(distanceInMetres, outputDistanceType);
        outputDistanceElement.value = distanceResult;
    })
}

function convertToMetres(distance, type) {
    switch (type) {
        case 'km':
            return distance * 1000;
            break;
        case 'm':
            return distance * 1;
            break;
        case 'cm':
            return distance * 0.01;
            break;
        case 'mm':
            return distance * 0.001;
            break;
        case 'mi':
            return distance * 1609.34;
            break;
        case 'yrd':
            return distance * 0.9144;
            break;
        case 'ft':
            return distance * 0.3048;
            break;
        case 'in':
            return distance * 0.0254;
            break;
    }
}

function convertToType(distanceInMetres, type) {
    switch (type) {
        case 'km':
            return distanceInMetres / 1000;
            break;
        case 'm':
            return distanceInMetres / 1;
            break;
        case 'cm':
            return distanceInMetres / 0.01;
            break;
        case 'mm':
            return distanceInMetres / 0.001;
            break;
        case 'mi':
            return distanceInMetres / 1609.34;
            break;
        case 'yrd':
            return distanceInMetres / 0.9144;
            break;
        case 'ft':
            return distanceInMetres / 0.3048;
            break;
        case 'in':
            return distanceInMetres / 0.0254;
            break;
    }
}