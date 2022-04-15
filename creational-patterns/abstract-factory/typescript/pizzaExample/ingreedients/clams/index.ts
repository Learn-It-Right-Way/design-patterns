export abstract class Clams {
    type: string = "Normal Clams";

    constructor() {
        console.log(`-----Clams Class Initialized----- Clams Type Is ${this.type}`);
    }
}

export class FreshClams extends Clams {
    constructor() {
        super();
        this.type = 'FreshClams';
    }
}

export class FrozenClams extends Clams {
    constructor() {
        super();
        this.type = 'FrozenClams';
    }
}
