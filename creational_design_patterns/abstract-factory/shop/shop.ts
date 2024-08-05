interface Monitor {
    getDetails() : string
}

interface Keyboard {
    getDetails() : string
}

class  LenovoKeyboard implements Keyboard { 
    getDetails() : string{
        return 'Lenovo Keyboard'
    }
 }

 class  LenovoMonitor implements Monitor { 
    getDetails() : string{
        return 'Lenovo Monitor'
    }
 }

class  ASUSKeyboard implements Keyboard { 
    getDetails() : string{
        return 'Lenovo Keyboard'
    }
 }

 class  ASUSMonitor implements Monitor { 
    getDetails() : string{
        return 'Lenovo Monitor'
    }
 }

 interface abstractFactory {
    monitorDetails() : Monitor,
    keyboardDetails() : Keyboard,
 }

 class LenovoFactory  implements abstractFactory{
    keyboardDetails(): Keyboard {
        return new LenovoKeyboard()
    }
    monitorDetails(): Monitor {
        return new LenovoMonitor()

    }
 }


 class ASUSFactory  implements abstractFactory{
    keyboardDetails(): Keyboard {
        return new LenovoKeyboard()
    }
    monitorDetails(): Monitor {
        return new LenovoMonitor()

    }
 }

