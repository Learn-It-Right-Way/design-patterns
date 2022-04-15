import { SlicedPepperoni } from "./ingreedients/pepperoni/index";
import { PizzaIngredientFactory } from "./AbstractFactory";
import { ReggianoCheese } from "./ingreedients/cheese";
import { FreshClams } from "./ingreedients/clams";
import { ThinCrustDough } from "./ingreedients/dough";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createCheese() {
        return new ReggianoCheese();

        // There can be several Cheese types and pick one type according to the parameter
    }

    createClam() {
        return new FreshClams();
    }

    createDough() {
        return new ThinCrustDough();
    }

    createPepperoni() {
        return new SlicedPepperoni();
    }

    createSauce() {
        return new ReggianoCheese();
    }
}
