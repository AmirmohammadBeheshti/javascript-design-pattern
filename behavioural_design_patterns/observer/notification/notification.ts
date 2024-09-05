interface IObserver {
    update(text : string) : void 
}

interface ISubject {
    registerObserver(payload :IObserver ) : void,
    removeObserver(payload : IObserver) : void,
    notifyObserver() : void 
}


class NotificationManagement implements ISubject {

    private observers : Set<IObserver> = new Set()
     private text : string

    

    registerObserver(payload: IObserver): void {
        this.observers.add(payload)
    }

    removeObserver(payload: IObserver): void {
        this.observers.delete(payload)
    }

     notifyObserver(): void {
         this.observers.forEach((observerItem) => observerItem.update(this.text) )
     }

     setMeasurements(
       text : string
      ): void {
        this.text = text
        this.notifyObserver();
      }
} 

class MobileNotification implements IObserver {
    private text : string

    constructor(private readonly notificationManagement : ISubject){
        this.notificationManagement.registerObserver(this)
    }

    update(text : string): void {
        this.text = text
        this.display();
    }
    display(){
        console.info("Display Message On Mobile => ", , this.text   );
    }
}

class DesktopNotification implements IObserver {
    private text : string

    constructor(private readonly notificationManagement : ISubject){
        this.notificationManagement.registerObserver(this)
    }

    update(text : string): void {
        this.text = text
        this.display();
    }
    display(){
        console.info("Display Message On Desktop => " , this.text   );
    }
}

const notificationManagement = new NotificationManagement()

const mobileNotification = new  MobileNotification(notificationManagement)

const desktopNotification = new  DesktopNotification(notificationManagement)

notificationManagement.setMeasurements("Hello World") 