interface INotificationService {
    sendEmail(recipient: string, subject: string, body: string): void;
    sendSMS(phoneNumber: string, message: string): void;
    sendPushNotification(deviceId: string, title: string, message: string): void;
  }

  
  class ThirdPartyNotificationService {
    sendNotification(type: string, details: object): void {
      console.log(`Sending ${type} notification with details:`, details);
      // Implementation for sending notification
    }
  }

  
  class NotificationAdapter implements INotificationService {
    constructor(private thirdPartyNotificationService :ThirdPartyNotificationService ){}

    sendEmail(recipient: string, subject: string, body: string): void {
        const details = {
            recipient,
            subject,
            body
          };
          this.thirdPartyNotificationService.sendNotification("email", details);
    }

    sendPushNotification(deviceId: string, title: string, message: string): void {
        const details = {
            deviceId,
            title,
            message
          };
          this.thirdPartyNotificationService.sendNotification("push", details);
    }

    sendSMS(phoneNumber: string, message: string): void {
        const details = {
            phoneNumber,
            message
          };
          this.thirdPartyNotificationService.sendNotification("sms", details);
    }
  }

const thirdPartyNotification = new ThirdPartyNotificationService()

const notificationAdapter = new NotificationAdapter(thirdPartyNotification)

notificationAdapter.sendSMS("00000000" , "Hello World")