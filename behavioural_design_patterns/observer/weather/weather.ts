// Implement Display Weather In Multiple Ways 

interface IObserver {
    update(temperature : number , humidity : number , pressure : number ) : void 
}

interface ISubject {
    registerObserver(payload :IObserver ) : void,
    removeObserver(payload : IObserver) : void,
    notifyObserver() : void 
}


class WeatherData implements ISubject {

    private observers : Set<IObserver> = new Set()
     private temperature : number 
     private humidity : number 
     private pressure : number

    

    registerObserver(payload: IObserver): void {
        this.observers.add(payload)
    }

    removeObserver(payload: IObserver): void {
        this.observers.delete(payload)
    }

     notifyObserver(): void {
         this.observers.forEach((observerItem) => observerItem.update(this.temperature , this.humidity , this.pressure) )
     }

     setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
      ): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObserver();
      }
} 

class DisplayWeatherOne implements IObserver {
    private temperature : number 
    private humidity : number 
    private pressure : number

    constructor(private readonly weatherData : ISubject){
        this.weatherData.registerObserver(this)
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature  =  temperature 
        this.humidity  =  humidity 
        this.pressure  =  pressure
        this.display();
    }
    display(){
        console.info("Display One  :  " , 'temperature => ' , this.temperature , 'humidity => ' , this.humidity , 'pressure' , this.pressure   );
    }
}

class DisplayWeatherTwo implements IObserver {
    private temperature : number 
    private humidity : number 
    private pressure : number

    constructor(private readonly weatherData : ISubject){
        this.weatherData.registerObserver(this)
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature  =  temperature 
        this.humidity  =  humidity 
        this.pressure  =  pressure
        this.display();
    }
    display(){
        console.info("Display Two" , 't : ' , this.temperature , 'h :' , this.humidity , 'p : ' , this.pressure   );
    }
}

const weatherData = new WeatherData()

const displayWeatherOne = new  DisplayWeatherOne(weatherData)

const displayWeatherTwo = new  DisplayWeatherTwo(weatherData)

weatherData.setMeasurements(10 , 20 , 30) 