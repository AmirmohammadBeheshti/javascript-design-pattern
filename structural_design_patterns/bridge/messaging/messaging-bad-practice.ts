class Message {
    private platform: string;
    private content: string;

    constructor(platform: string, content: string) {
        this.platform = platform;
        this.content = content;
    }

    send(): void {
        if (this.platform === "Email") {
            console.log(`Sending email with content: ${this.content}`);
        } else if (this.platform === "SMS") {
            console.log(`Sending SMS with content: ${this.content}`);
        } else {
            console.error("Unsupported platform");
        }
    }
}

// Client code
const emailMessage = new Message("Email", "Hello via Email!");
emailMessage.send();

const smsMessage = new Message("SMS", "Hello via SMS!");
smsMessage.send();
