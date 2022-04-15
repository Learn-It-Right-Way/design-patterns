import { PizzaIngredientFactory } from "../../AbstractFactory";
import { Pizza } from "../AbstractPizza";

export class ClamPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        this.ingredientFactory.createDough();
        this.ingredientFactory.createSauce();
        this.ingredientFactory.createClam();
        this.ingredientFactory.createCheese();
    }
}
