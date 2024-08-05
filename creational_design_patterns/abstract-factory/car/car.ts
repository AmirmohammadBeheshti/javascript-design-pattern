// Abstract Product Interfaces
interface Sedan {
    drive(): void;
}

interface SUV {
    drive(): void;
}

// Concrete Product Classes for Luxury Brand
class LuxurySedan implements Sedan {
    drive(): void {
        console.log("Driving a luxury sedan.");
    }
}

class LuxurySUV implements SUV {
    drive(): void {
        console.log("Driving a luxury SUV.");
    }
}

// Concrete Product Classes for Budget Brand
class BudgetSedan implements Sedan {
    drive(): void {
        console.log("Driving a budget sedan.");
    }
}

class BudgetSUV implements SUV {
    drive(): void {
        console.log("Driving a budget SUV.");
    }
}

// Abstract Factory Interface
interface CarFactory {
    createSedan(): Sedan;
    createSUV(): SUV;
}

// Concrete Factory for Luxury Brand
class LuxuryCarFactory implements CarFactory {
    createSedan(): Sedan {
        return new LuxurySedan();
    }

    createSUV(): SUV {
        return new LuxurySUV();
    }
}

// Concrete Factory for Budget Brand
class BudgetCarFactory implements CarFactory {
    createSedan(): Sedan {
        return new BudgetSedan();
    }

    createSUV(): SUV {
        return new BudgetSUV();
    }
}

// Client Code
function clientCode(factory: CarFactory) {
    const sedan = factory.createSedan();
    const suv = factory.createSUV();

    sedan.drive();
    suv.drive();
}

// Using Luxury Car Factory
console.log("Using Luxury Car Factory:");
const luxuryFactory = new LuxuryCarFactory();
clientCode(luxuryFactory);

// Using Budget Car Factory
console.log("\nUsing Budget Car Factory:");
const budgetFactory = new BudgetCarFactory();
clientCode(budgetFactory);
