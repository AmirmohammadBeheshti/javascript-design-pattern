import {Prototype} from '../Document/interface/prototype.interface'

class GameCharacter implements Prototype {
    public name: string;
    public health: number;
    public attack: number;
    public defense: number;

    constructor(name: string, health: number, attack: number, defense: number) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    clone(): this {
        const copy = Object.create(this);
        copy.name = this.name;
        copy.health = this.health;
        copy.attack = this.attack;
        copy.defense = this.defense;
        return copy;
    }

    display(): void {
        console.log(`Name: ${this.name}, Health: ${this.health}, Attack: ${this.attack}, Defense: ${this.defense}`);
    }
}

// Prototype instances
const warrior = new GameCharacter("Warrior", 100, 20, 10);
const mage = new GameCharacter("Mage", 50, 30, 5);

// Cloning prototypes
const warriorClone = warrior.clone();
warriorClone.name = "Warrior Clone";
warriorClone.display(); // Output: Name: Warrior Clone, Health: 100, Attack: 20, Defense: 10

const mageClone = mage.clone();
mageClone.name = "Mage Clone";
mageClone.display(); // Output: Name: Mage Clone, Health: 50, Attack: 30, Defense: 5
