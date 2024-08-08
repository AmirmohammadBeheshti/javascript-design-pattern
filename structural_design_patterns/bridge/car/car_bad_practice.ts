// Tightly coupled implementation
class Car {
    private type: string;
    private engineType: string;

    constructor(type: string, engineType: string) {
        this.type = type;
        this.engineType = engineType;
    }

    start(): void {
        if (this.engineType === "Petrol") {
            console.log(`${this.type}: Starting petrol engine...`);
        } else if (this.engineType === "Diesel") {
            console.log(`${this.type}: Starting diesel engine...`);
        } else if (this.engineType === "Electric") {
            console.log(`${this.type}: Starting electric engine...`);
        } else {
            console.error("Unsupported engine type");
        }
    }
}

// Client code
const petrolSedan = new Car("Sedan", "Petrol");
petrolSedan.start();

const dieselSUV = new Car("SUV", "Diesel");
dieselSUV.start();
