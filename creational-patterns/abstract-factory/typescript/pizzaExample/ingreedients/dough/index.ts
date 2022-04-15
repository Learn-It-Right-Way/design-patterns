export abstract class Dough {
    type: string = "Normal Dough";

    constructor() {
        console.log(`-----Dough Class Initialized----- Dough Type Is ${this.type}`);
    }
}

export class ThinCrustDough extends Dough {
    constructor() {
        super();
        this.type = 'ThinCrustDough';
    }
}

export class ThickCrustDough extends Dough {
    constructor() {
        super();
        this.type = 'ThickCrustDough';
    }
}
