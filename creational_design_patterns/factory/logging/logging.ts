interface Logging {
    saveLog(data : Record<string , string | number>) : boolean
}

class ConsoleLogger implements Logging {
    saveLog(data: Record<string, string | number>): boolean {
        try {
            const now = new Date();
            console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDay()}:${now.getHours()}-${now.getMinutes()} => ${data}`);            
            return  true
        }catch(e) {
            console.error(e);
            return false 
        }
    }
}

class FileLogger implements Logging{
    saveLog(data: Record<string, string | number>): boolean {
        try{
            console.log("Save Log In File ");
            return true
        }catch(e){
            console.error(e);
            return false 
        }
    }
}

class DatabaseLogger implements Logging {
    saveLog(data: Record<string, string | number>): boolean {
        try{
            console.log("Save Log In Database");
            return true
        }catch(e){
            console.error(e);
            return false 
        }
    }
}

class LogFactory {
    static createLog(type : 'database' | 'file' |'console' ) : Logging {
        switch (type) {
            case 'console':
                return new ConsoleLogger()
            case 'database':
                return new DatabaseLogger()
            case 'file':
                return new FileLogger()
        
            default:
                throw new Error("Unknown bread type");
        }
    }
}

const FileLog = LogFactory.createLog('file') 
FileLog.saveLog({name : 'John'})