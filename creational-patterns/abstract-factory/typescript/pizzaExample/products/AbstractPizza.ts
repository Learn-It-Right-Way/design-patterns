import { Cheese } from "../ingreedients/cheese";
import { Clams } from "../ingreedients/clams";
import { Dough } from "../ingreedients/dough";
import { Pepperoni } from "../ingreedients/pepperoni";
import { Sauce } from "../ingreedients/sauce";

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clams;

    abstract prepare();

    bake() {
        console.log("Bake for 25 minutes at 350");
    }

    cut() {
        console.log("Cutting the pizza into diagonal slices");
    }

    box() {
        console.log("Place pizza in official PizzaStore box");
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
