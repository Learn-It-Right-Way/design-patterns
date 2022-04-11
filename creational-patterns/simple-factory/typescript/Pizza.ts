export abstract class Pizza {
    abstract prepare(): void;
    abstract bake(): void;
    abstract cut(): void;
    abstract box(): void;
}

export class CheesePizza extends Pizza {
    prepare() {
        console.log("---Prepare CheesePizza-----");
    }

    bake() {
        console.log("---Bake CheesePizza-----");
    }

    cut() {
        console.log("---Cut CheesePizza-----");
    }

    box() {
        console.log("---Box CheesePizza-----");
    }
}

export class PepperoniPizza extends Pizza {
    prepare() {
        console.log("---Prepare PepperoniPizza-----");
    }

    bake() {
        console.log("---Bake PepperoniPizza-----");
    }

    cut() {
        console.log("---Cut PepperoniPizza-----");
    }

    box() {
        console.log("---Box PepperoniPizza-----");
    }
}

export class ClamPizza extends Pizza {
    prepare() {
        console.log("---Prepare ClamPizza-----");
    }

    bake() {
        console.log("---Bake ClamPizza-----");
    }

    cut() {
        console.log("---Cut ClamPizza-----");
    }

    box() {
        console.log("---Box ClamPizza-----");
    }
}

export class VeggiePizza extends Pizza {
    prepare() {
        console.log("---Prepare VeggiePizza-----");
    }

    bake() {
        console.log("---Bake VeggiePizza-----");
    }

    cut() {
        console.log("---Cut VeggiePizza-----");
    }

    box() {
        console.log("---Box VeggiePizza-----");
    }
}
