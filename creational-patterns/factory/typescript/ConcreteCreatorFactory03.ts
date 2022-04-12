import { PizzaStore } from "./CreatorFactory";
import {
    CaliforniaStyleCheesePizza,
    CaliforniaStyleClamPizza,
    CaliforniaStylePepperoniPizza,
    CaliforniaStyleVeggiePizza,
} from "./products/ConcreteProductCaliforniaStyle";
import { Pizza } from "./products/Product";

export default class CaliforniaPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza | null {
        if (type === "cheese") {
            return new CaliforniaStyleCheesePizza();
        } else if (type === "veggie") {
            return new CaliforniaStyleVeggiePizza();
        } else if (type === "clam") {
            return new CaliforniaStyleClamPizza();
        } else if (type === "pepperoni") {
            return new CaliforniaStylePepperoniPizza();
        } else {
            return null;
        }
    }
}
