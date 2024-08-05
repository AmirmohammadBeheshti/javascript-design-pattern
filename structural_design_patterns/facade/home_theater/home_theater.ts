class Lights {
    turnOn() {
        console.log('Lights are on');
    }
    dim() {
        console.log('Lights are dimmed');
    }
}

class SoundSystem {
    turnOn() {
        console.log('SoundSystem is on');
    }
    setVolume(volume: number) {
        console.log(`SoundSystem volume set to ${volume}`);
    }
}

class Projector {
    turnOn() {
        console.log('Projector is on');
    }
    setMode(mode: string) {
        console.log(`Projector mode set to ${mode}`);
    }
}


class HomeTheaterFacade {
    private lights: Lights;
    private soundSystem: SoundSystem;
    private projector: Projector;

    constructor(lights: Lights, soundSystem: SoundSystem, projector: Projector) {
        this.lights = lights;
        this.soundSystem = soundSystem;
        this.projector = projector;
    }

    watchMovie() {
        console.log('Get ready to watch a movie...');
        this.lights.dim();
        this.soundSystem.turnOn();
        this.soundSystem.setVolume(10);
        this.projector.turnOn();
        this.projector.setMode('Cinema');
        console.log('Movie is ready to watch!');
    }
}

const lights = new Lights();
const soundSystem = new SoundSystem();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(lights, soundSystem, projector);

// Using the facade to watch a movie
homeTheater.watchMovie();
