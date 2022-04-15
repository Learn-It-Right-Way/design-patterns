import { MozzarellaCheese } from "./ingreedients/cheese/index";
import { SlicedPepperoni } from "./ingreedients/pepperoni/index";
import { ThickCrustDough } from "./ingreedients/dough/index";
import { PizzaIngredientFactory } from "./AbstractFactory";
import { FrozenClams } from "./ingreedients/clams";
import { PlumTomatoSauce } from "./ingreedients/sauce";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createCheese() {
        return new PlumTomatoSauce();
    }

    createClam() {
        return new FrozenClams();
    }

    createDough() {
        return new ThickCrustDough();
    }

    createPepperoni() {
        return new SlicedPepperoni();
    }

    createSauce() {
        return new MozzarellaCheese();
    }
}
