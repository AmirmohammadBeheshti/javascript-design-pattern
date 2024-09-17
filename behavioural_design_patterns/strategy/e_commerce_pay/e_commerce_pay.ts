
interface PaymentStrategy {
    pay(amount: number): void;
}



class CreditCardPayment implements PaymentStrategy {
    constructor(private name: string, private cardNumber: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card (Cardholder: ${this.name}, Card Number: ${this.cardNumber}).`);
    }
}

class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal (Account: ${this.email}).`);
    }
}

class GooglePayPayment implements PaymentStrategy {
    constructor(private phoneNumber: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Google Pay (Phone: ${this.phoneNumber}).`);
    }
}

class BitcoinPayment implements PaymentStrategy {
    constructor(private walletAddress: string) {}

    pay(amount: number): void {
        console.log(`Paid ${amount} using Bitcoin (Wallet: ${this.walletAddress}).`);
    }
}

class Checkout {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    processOrder(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}



// Example usage
const amount = 100;

let paymentMethod: PaymentStrategy = new CreditCardPayment("John Doe", "1234-5678-9876-5432");
let checkout = new Checkout(paymentMethod);
checkout.processOrder(amount); // Paid 100 using Credit Card

// User decides to switch to PayPal payment
paymentMethod = new PayPalPayment("john.doe@example.com");
checkout.setPaymentStrategy(paymentMethod);
checkout.processOrder(amount); // Paid 100 using PayPal

// User selects Google Pay
paymentMethod = new GooglePayPayment("123-456-7890");
checkout.setPaymentStrategy(paymentMethod);
checkout.processOrder(amount); // Paid 100 using Google Pay

paymentMethod = new BitcoinPayment("bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh");
checkout.setPaymentStrategy(paymentMethod);
checkout.processOrder(amount); // Paid 100 using Bitcoin
