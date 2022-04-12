import { PizzaStore } from "./CreatorFactory";
import {
    NYStyleCheesePizza,
    NYStyleClamPizza,
    NYStylePepperoniPizza,
    NYStyleVeggiePizza,
} from "./products/ConcreteProductNyStyle";
import { Pizza } from "./products/Product";

export default class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza | null {
        if (type === "cheese") {
            return new NYStyleCheesePizza();
        } else if (type === "veggie") {
            return new NYStyleVeggiePizza();
        } else if (type === "clam") {
            return new NYStyleClamPizza();
        } else if (type === "pepperoni") {
            return new NYStylePepperoniPizza();
        } else {
            return null;
        }
    }
}
