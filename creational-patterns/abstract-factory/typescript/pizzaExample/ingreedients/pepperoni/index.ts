export abstract class Pepperoni {
    type: string = "Normal Pepperoni";

    constructor() {
        console.log(`-----Pepperoni Class Initialized----- Pepperoni Type Is ${this.type}`);
    }
}

export class SlicedPepperoni extends Pepperoni {
    constructor() {
        super();
        this.type = 'SlicedPepperoni';
    }
}
