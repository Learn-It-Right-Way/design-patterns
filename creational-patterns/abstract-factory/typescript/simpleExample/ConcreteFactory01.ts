import { AbstractFactory } from "./AbstractFactory";
import { Galaxy, GalaxyA9 } from "./products/phones/ConcretePhone";
import { GalaxyA9Signal, GalaxySignal } from "./products/signals/ConcreteSignal";

export class SamsungFactory implements AbstractFactory {
    getPhone(type: string) {
        switch (type) {
            case "galaxy":
                return new Galaxy();
            case "a9":
                return new GalaxyA9();
            default:
                break;
        }
    }

    getSignalStrenth(type: string) {
        switch (type) {
            case "galaxy":
                return new GalaxySignal();
            case "a9":
                return new GalaxyA9Signal();
            default:
                break;
        }
    }
}
