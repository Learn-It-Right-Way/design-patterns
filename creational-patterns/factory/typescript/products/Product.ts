export abstract class Pizza {
    public name: string = '';

    prepare() {
        console.log(this.name + " ---Prepare CheesePizza-----");
    }

    bake() {
        console.log(this.name + " ---Bake CheesePizza-----");
    }

    cut() {
        console.log(this.name + " ---Cut CheesePizza-----");
    }

    box() {
        console.log(this.name + " ---Box CheesePizza-----");
    }
}
