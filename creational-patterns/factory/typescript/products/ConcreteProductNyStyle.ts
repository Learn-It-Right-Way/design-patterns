import { Pizza } from "./Product";

export class NYStyleCheesePizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "NYStyleCheesePizza";
    }
}

export class NYStyleVeggiePizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "NYStyleVeggiePizza";
    }
}

export class NYStyleClamPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "NYStyleClamPizza";
    }
}

export class NYStylePepperoniPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "NYStylePepperoniPizza";
    }
}
