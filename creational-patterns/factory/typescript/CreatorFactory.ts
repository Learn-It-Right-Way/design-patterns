import { Pizza } from "./products/Product";

export abstract class PizzaStore {
    abstract createPizza(type: string): Pizza | null;

    orderPizza(type: string) {
        const pizza = this.createPizza(type);

        if (pizza) {
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
        }
    }
}
