// Component Interface
abstract class MenuComponent {
    add(component: MenuComponent): void {
        throw new Error("Operation not supported.");
    }

    remove(component: MenuComponent): void {
        throw new Error("Operation not supported.");
    }

    getChild(index: number): MenuComponent {
        throw new Error("Operation not supported.");
    }

    getName(): string {
        throw new Error("Operation not supported.");
    }

    getDescription(): string {
        throw new Error("Operation not supported.");
    }

    getPrice(): number {
        throw new Error("Operation not supported.");
    }

    print(): void {
        throw new Error("Operation not supported.");
    }
}

// Leaf Class: Represents an individual menu item
class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private price: number;

    constructor(name: string, description: string, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    print(): void {
        console.log(`${this.getName()} - ${this.getDescription()} : $${this.getPrice()}`);
    }
}

// Composite Class: Represents a combo of menu items or a menu section
class MenuComposite extends MenuComponent {
    private components: MenuComponent[] = [];
    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    add(component: MenuComponent): void {
        this.components.push(component);
    }

    remove(component: MenuComponent): void {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }

    getChild(index: number): MenuComponent {
        return this.components[index];
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.components.reduce((total, component) => total + component.getPrice(), 0);
    }

    print(): void {
        console.log(`\n${this.getName()} - ${this.getDescription()}`);
        console.log(`------------------------------------`);
        for (const component of this.components) {
            component.print();
        }
    }
}

// Client code
const mainMenu = new MenuComposite("Main Menu", "All available items");
const appetizers = new MenuComposite("Appetizers", "Start your meal with these delicious appetizers");
const drinks = new MenuComposite("Drinks", "Choose from a variety of beverages");

const springRolls = new MenuItem("Spring Rolls", "Crispy and delicious", 5.99);
const nachos = new MenuItem("Nachos", "Cheesy goodness", 7.99);
const soda = new MenuItem("Soda", "Refreshing drink", 1.99);
const coffee = new MenuItem("Coffee", "Freshly brewed", 2.99);

const combo1 = new MenuComposite("Combo 1", "A mix of appetizers and a drink");
combo1.add(springRolls);
combo1.add(soda);

appetizers.add(springRolls);
appetizers.add(nachos);
drinks.add(soda);
drinks.add(coffee);

mainMenu.add(appetizers);
mainMenu.add(drinks);
mainMenu.add(combo1);

mainMenu.print();

console.log(`\nTotal price of Combo 1: $${combo1.getPrice()}`);
