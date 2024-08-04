// Product interface
interface Bread {
    getDescription(): string;
}

// Concrete Products
class Baguette implements Bread {
    getDescription(): string {
        return "This is a baguette.";
    }
}

class Sourdough implements Bread {
    getDescription(): string {
        return "This is sourdough bread.";
    }
}

// Factory
class BreadFactory {
    static createBread(type: 'baguette' | 'sourdough'): Bread {
        if (type === "baguette") {
            return new Baguette();
        } else if (type === "sourdough") {
            return new Sourdough();
        } else {
            throw new Error("Unknown bread type");
        }
    }
}

// Usage
const myBread = BreadFactory.createBread("baguette");
console.log(myBread.getDescription()); 

const anotherBread = BreadFactory.createBread("sourdough");
console.log(anotherBread.getDescription()); 
