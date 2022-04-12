import { PizzaStore } from "./CreatorFactory";
import {
    ChicagoStyleCheesePizza,
    ChicagoStyleClamPizza,
    ChicagoStylePepperoniPizza,
    ChicagoStyleVeggiePizza,
} from "./products/ConcreteProductChicagoStyle";
import { Pizza } from "./products/Product";

export default class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza | null {
        if (type === "cheese") {
            return new ChicagoStyleCheesePizza();
        } else if (type === "veggie") {
            return new ChicagoStyleVeggiePizza();
        } else if (type === "clam") {
            return new ChicagoStyleClamPizza();
        } else if (type === "pepperoni") {
            return new ChicagoStylePepperoniPizza();
        } else {
            return null;
        }
    }
}
