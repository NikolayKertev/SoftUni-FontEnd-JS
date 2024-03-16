function solve(input) {
    input.forEach(row => {
        let [name, latitude, longitude] = row.split(' | ');
        new Towns(name, latitude, longitude).ToString();
    })
}

class Towns{
    constructor(town, latitude, longitude){
        this.town = town;
        this. latitude = Number(latitude);
        this.longitude = Number(longitude);
    }

    ToString(){
        console.log(`{ town: '${this.town}', latitude: '${this.latitude.toFixed(2)}', longitude: '${this.longitude.toFixed(2)}' }`);
    }
}

solve(['Plovdiv | 136.45 | 812.575']
);