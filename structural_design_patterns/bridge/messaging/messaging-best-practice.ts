interface Sender {
    sendMessage(content: string): string;
  }
  
  class EmailSender implements Sender {
    sendMessage(content: string): string {
      console.log("Sending Message With Email");
      return content;
    }
  }
  
  class SMSSender implements Sender {
    sendMessage(content: string): string {
      console.log("Sending Message With SMS");
      return content;
    }
  }
  
  abstract class AbstractMessage {
    constructor(public message: Sender) {}
  
    send(content: string): string {
      return this.message.sendMessage(content);
    }
  }
  
  class Message extends AbstractMessage {
    constructor(sender: Sender) {
      super(sender);
    }
  }
  
  const emailMessage = new Message(new EmailSender());
  emailMessage.send("Hello From Email")
  