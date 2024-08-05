// Credit Card Processor
class CreditCardProcessor {
    public processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

// Bank Transfer Processor
class BankTransferProcessor {
    public initiateTransfer(amount: number): void {
        console.log(`Initiating bank transfer of $${amount}`);
    }
}

// Digital Wallet Processor
class DigitalWalletProcessor {
    public chargeWallet(amount: number): void {
        console.log(`Charging digital wallet with $${amount}`);
    }
}

// Fraud Detection System
class FraudDetectionSystem {
    public checkForFraud(transactionId: string): boolean {
        console.log(`Checking fraud for transaction ID: ${transactionId}`);
        // Simulate fraud detection logic
        return Math.random() > 0.9; // 10% chance of fraud
    }
}

// Facade
class PaymentFacade {
    private creditCardProcessor: CreditCardProcessor;
    private bankTransferProcessor: BankTransferProcessor;
    private digitalWalletProcessor: DigitalWalletProcessor;
    private fraudDetectionSystem: FraudDetectionSystem;

    constructor() {
        this.creditCardProcessor = new CreditCardProcessor();
        this.bankTransferProcessor = new BankTransferProcessor();
        this.digitalWalletProcessor = new DigitalWalletProcessor();
        this.fraudDetectionSystem = new FraudDetectionSystem();
    }

    public makePayment(method: string, amount: number, transactionId: string): void {
        if (this.fraudDetectionSystem.checkForFraud(transactionId)) {
            console.log("Fraud detected! Payment aborted.");
            return;
        }
        
        switch (method) {
            case 'creditCard':
                this.creditCardProcessor.processPayment(amount);
                break;
            case 'bankTransfer':
                this.bankTransferProcessor.initiateTransfer(amount);
                break;
            case 'digitalWallet':
                this.digitalWalletProcessor.chargeWallet(amount);
                break;
            default:
                console.log("Invalid payment method");
                break;
        }
    }
}

// Client code
function main(): void {
    const paymentFacade = new PaymentFacade();
    const transactionId = "TX123456789";
    
    paymentFacade.makePayment('creditCard', 100, transactionId);
    paymentFacade.makePayment('bankTransfer', 250, transactionId);
    paymentFacade.makePayment('digitalWallet', 75, transactionId);
    paymentFacade.makePayment('unknownMethod', 50, transactionId);
}

main();
