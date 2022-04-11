import Factory from "./Factory";

/**
 * Pizza Store
 */
class Client {
    public factory: Factory;

    public constructor(factory: Factory) {
        this.factory = factory;
    }

    public orderPizza(type: string) {
        let pizza;

        pizza = this.factory.createPizza(type);

        if (pizza) {
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
        }
    }
}

const client = new Client(new Factory());
// client.orderPizza("cheese");
client.orderPizza("pepperoni");
