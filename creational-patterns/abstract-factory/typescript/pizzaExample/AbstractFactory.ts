import { Cheese } from "./ingreedients/cheese";
import { Clams } from "./ingreedients/clams";
import { Dough } from "./ingreedients/dough";
import { Pepperoni } from "./ingreedients/pepperoni";
import { Sauce } from "./ingreedients/sauce";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}
