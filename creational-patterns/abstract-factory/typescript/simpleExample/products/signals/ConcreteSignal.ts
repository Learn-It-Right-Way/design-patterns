import { Signals } from "./AbstractSignal";

export class GalaxySignal implements Signals {
    getSignal(): void {
        console.log("-----SAMSUNG GALAXY SIGNAL------");
    }
}

export class GalaxyA9Signal implements Signals {
    getSignal(): void {
        console.log("-----SAMSUNG GALAXY A9 SIGNAL------");
    }
}

export class Redmi6Signal implements Signals {
    getSignal(): void {
        console.log("-----REDMI 6 SIGNAL------");
    }
}

export class RedmiProSignal implements Signals {
    getSignal(): void {
        console.log("-----REDMI PRO SIGNAL------");
    }
}
