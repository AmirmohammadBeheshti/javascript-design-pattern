// Light System
class LightSystem {
    public turnOn(): void {
        console.log("Lights are turned on");
    }

    public turnOff(): void {
        console.log("Lights are turned off");
    }

    public dim(level: number): void {
        console.log(`Lights dimmed to ${level}%`);
    }
}

// Air Conditioning System
class AirConditioningSystem {
    public setTemperature(temperature: number): void {
        console.log(`Air conditioning set to ${temperature}°C`);
    }

    public turnOn(): void {
        console.log("Air conditioning is turned on");
    }

    public turnOff(): void {
        console.log("Air conditioning is turned off");
    }
}

// Security System
class SecuritySystem {
    public activate(): void {
        console.log("Security system activated");
    }

    public deactivate(): void {
        console.log("Security system deactivated");
    }

    public setAlarmLevel(level: number): void {
        console.log(`Security alarm level set to ${level}`);
    }
}

// Entertainment System
class EntertainmentSystem {
    public playMusic(): void {
        console.log("Music is playing");
    }

    public stopMusic(): void {
        console.log("Music is stopped");
    }

    public setVolume(level: number): void {
        console.log(`Volume set to ${level}`);
    }
}

// Facade
class HomeAutomationFacade {
    private lightSystem: LightSystem;
    private acSystem: AirConditioningSystem;
    private securitySystem: SecuritySystem;
    private entertainmentSystem: EntertainmentSystem;

    constructor() {
        this.lightSystem = new LightSystem();
        this.acSystem = new AirConditioningSystem();
        this.securitySystem = new SecuritySystem();
        this.entertainmentSystem = new EntertainmentSystem();
    }

    public startDay(): void {
        console.log("Starting your day...");
        this.lightSystem.turnOn();
        this.acSystem.setTemperature(22);
        this.securitySystem.deactivate();
        this.entertainmentSystem.playMusic();
    }

    public endDay(): void {
        console.log("Ending your day...");
        this.lightSystem.turnOff();
        this.acSystem.turnOff();
        this.securitySystem.activate();
        this.entertainmentSystem.stopMusic();
    }
}

// Client code
function main(): void {
    const homeFacade = new HomeAutomationFacade();
    homeFacade.startDay();
    // Other activities during the day
    homeFacade.endDay();
}

main();
