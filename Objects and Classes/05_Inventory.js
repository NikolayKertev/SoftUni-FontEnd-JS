function solve(input) {
    let arrayOfHeros = [];

    input.forEach(row => {
        let [name, level, items] = row.split(' / ');
        let hero = new Hero(name, level, items)
        arrayOfHeros.push(hero);
    });

    arrayOfHeros.sort((hero1, hero2) => hero1.level - hero2.level);

    arrayOfHeros.forEach(hero => hero.ToString());
}

class Hero {
    constructor(name, level, items) {
        this.name = name;
        this.level = level;
        this.items = items;
    }

    ToString() {
        console.log(`Hero: ${this.name}`);
        console.log(`level => ${this.level}`);
        console.log(`items => ${this.items}`);
    }
}

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])