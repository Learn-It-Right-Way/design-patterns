export abstract class Sauce {
    type: string = "Normal Sauce";

    constructor() {
        console.log(`-----Sauce Class Initialized----- Sauce Type Is ${this.type}`);
    }
}

export class MarinaraSauce extends Sauce {
    constructor() {
        super();
        this.type = 'MarinaraSauce';
    }
}

export class PlumTomatoSauce extends Sauce {
    constructor() {
        super();
        this.type = 'PlumTomatoSauce';
    }
}
