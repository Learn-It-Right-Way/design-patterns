export abstract class Cheese {
    type: string = "Normal Cheese";

    constructor() {
        console.log(`-----Cheese Class Initialized----- Cheese Type Is ${this.type}`);
    }
}

export class ReggianoCheese extends Cheese {
    constructor() {
        super();
        this.type = "ReggianoCheese";
    }
}

export class MozzarellaCheese extends Cheese {
    constructor() {
        super();
        this.type = "MozzarellaCheese";
    }
}
