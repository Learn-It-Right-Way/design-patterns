import { Pizza } from "./Product";

export class CaliforniaStyleCheesePizza extends Pizza {
    public name: string = '';

    constructor() {
        super();
        this.name = "CaliforniaStyleCheesePizza";
    }
}

export class CaliforniaStyleVeggiePizza extends Pizza {
    public name: string = '';

    constructor() {
        super();
        this.name = "CaliforniaStyleVeggiePizza";
    }
}

export class CaliforniaStyleClamPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "CaliforniaStyleClamPizza";
    }
}

export class CaliforniaStylePepperoniPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "CaliforniaStylePepperoniPizza";
    }
}
