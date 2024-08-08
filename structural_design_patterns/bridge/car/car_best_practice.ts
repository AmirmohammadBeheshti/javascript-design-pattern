interface Engine {
    start():void
}

class PatrolEngine implements Engine {
    start(): void {
        console.log('Starting Patrol Engine ');
    }
}

class SUVEngine implements Engine {
    start(): void {
        console.log('Starting Patrol Engine ');
    }
}

abstract class Car {
    constructor(engine : Engine){}

    abstract start() : void
}

class SUV extends Car {
    constructor(private engine : Engine){
        super(engine)
    }

    start() {
        console.log("CAR => SUV");
        this.engine.start()
    }
}


class Patrol extends Car {
    constructor(private engine : Engine){
        super(engine)
    }

    start() {
        console.log("CAR => patrol");
        this.engine.start()
    }
}

const patrol = new Patrol(new PatrolEngine())
patrol.start()

const suv = new SUV(new SUVEngine())
suv.start()




