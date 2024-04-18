function solve(input) {
    class Player {
        constructor(name, hp, bullets) {
            this.name = name,
                this.hp = hp;
            this.bullets = bullets
        }
        FireShot(target) {
            if (this.bullets > 0) {
                this.bullets--;
                console.log(`${this.name} has successfully hit ${target} and now has ${this.bullets} bullets!`);
            } else {
                console.log(`${this.name} doesn't have enough bullets to shoot at ${target}!`);
            }
        }
        TakeHit(damage, attacker) {
            this.hp -= damage;

            if (this.hp > 0) {
                console.log(`${this.name} took a hit for ${damage} HP from ${attacker} and now has ${this.hp} HP!`);
            } else {
                console.log(`${this.name} was gunned down by ${attacker}!`);
            }
        }
        Reload() {
            if (this.bullets < 6) {
                console.log(`${this.name} reloaded ${6 - this.bullets} bullets!`);
                this.bullets = 6;
            } else {
                console.log(`${this.name}\'s pistol is fully loaded!`);
            }
        }
        PatchUp(amount) {
            if (this.hp < 100) {
                if (this.hp + Number(amount) > 100) {
                    amount = 100 - this.hp;
                }
                console.log(`${this.name} patched up and recovered ${amount} HP!`);
                this.hp += Number(amount);
            } else {
                console.log(`${this.name} is in full health!`);
            }
        }
        ToString() {
            console.log(`${this.name}`)
            console.log(`HP: ${this.hp}`);
            console.log(`Bullets: ${this.bullets}`);
        }
    }
    const heroesArray = [];
    const n = input.shift();

    for (let i = 0; i < n; i++) {
        const [name, hp, bullets] = input.shift().split(' ');

        const player = new Player(name, hp, bullets);

        heroesArray.push(player);

    }

    let inputLine = input.shift();

    while (inputLine !== 'Ride Off Into Sunset') {
        const [action, charName, args1, args2] = inputLine.split(' - ');

        switch (action) {
            case 'FireShot':
                const target = args1;

                heroesArray.find(player => player.name === charName).FireShot(target);
                break;
            case 'TakeHit':
                const damage = args1;
                const attacker = args2;

                heroesArray.find(player => player.name === charName).TakeHit(damage, attacker);
                break;
            case 'Reload':
                heroesArray.find(player => player.name === charName).Reload();

                break;
            case 'PatchUp':
                const amount = args1;
                heroesArray.find(player => player.name === charName).PatchUp(amount);
                break;
        }



        inputLine = input.shift();
    }

    heroesArray.filter(hero => hero.hp > 0).forEach(hero => hero.ToString());
}

solve(
    (["2",
        "Gus 100 0",
        "Walt 100 6",
        "TakeHit - Gus - 80 - Bandit",
       "PatchUp - Gus - 20",
        "Ride Off Into Sunset"])
);