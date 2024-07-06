class Singleton {
    private static instance : Singleton

    // use private class for cant instance 
    private constructor(){}


    public static getInstance() : Singleton {
        // just this class can instance of class 
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }

        return Singleton.instance 
    }
}


const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log(instance1 === instance2);