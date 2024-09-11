// Product class
class Product {
    constructor(public name: string, public price: number) {}
}

// Iterator interface for products
interface ProductIterator {
    nextProduct(): Product | null;
    previousProduct(): Product | null;
    hasNext(): boolean;
    hasPrevious(): boolean;
}

// Concrete Product Collection class (e.g., for a specific category)
class ProductCollection {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    createIterator(): ProductIterator {
        return new ConcreteProductIterator(this.products);
    }
}

// Concrete Iterator for Product Collection
class ConcreteProductIterator implements ProductIterator {
    private index = 0;

    constructor(private products: Product[]) {}

    nextProduct(): Product | null {
        if (this.hasNext()) {
            return this.products[this.index++];
        }
        return null;
    }

    previousProduct(): Product | null {
        if (this.hasPrevious()) {
            return this.products[--this.index];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.products.length;
    }

    hasPrevious(): boolean {
        return this.index > 0;
    }
}

// Usage example
const electronics = new ProductCollection();
electronics.addProduct(new Product("Laptop", 1500));
electronics.addProduct(new Product("Smartphone", 800));
electronics.addProduct(new Product("Tablet", 400));

const iterator = electronics.createIterator();

console.log(iterator.nextProduct()?.name); // Laptop
console.log(iterator.nextProduct()?.name); // Smartphone
console.log(iterator.previousProduct()?.name); // Laptop
