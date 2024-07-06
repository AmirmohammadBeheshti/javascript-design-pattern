class LoggerSingleton {
    private static instance : LoggerSingleton

    // use private class for cant instance 
    private constructor(){}


    public static getInstance() : LoggerSingleton {
        // just this class can instance of class 
        if(!LoggerSingleton.instance){
            LoggerSingleton.instance = new LoggerSingleton()
        }

        return LoggerSingleton.instance 
    }

    public log(message : string){
        console.log(`new Date().toLocaleTimeString() -  ${message}`);
    }
}


const logger1 = LoggerSingleton.getInstance()
const logger2 = LoggerSingleton.getInstance()

console.log(logger1 === logger2);

logger1.log("This Is First Log")

logger2.log("This Is Second Log")