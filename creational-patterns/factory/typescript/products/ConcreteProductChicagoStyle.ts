import { Pizza } from "./Product";

export class ChicagoStyleCheesePizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "ChicagoStyleCheesePizza";
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "ChicagoStyleVeggiePizza";
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "ChicagoStyleClamPizza";
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    public name: string = '';
    constructor() {
        super();
        this.name = "ChicagoStylePepperoniPizza";
    }
}
