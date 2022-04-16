import { AbstractFactory } from "./AbstractFactory";
import { Redmi6, RedmiPro } from "./products/phones/ConcretePhone";
import { Redmi6Signal, RedmiProSignal } from "./products/signals/ConcreteSignal";

export class XiaomiFactory implements AbstractFactory {
    getPhone(type: string) {
        switch (type) {
            case "redmi6":
                return new Redmi6();
            case "redmipro":
                return new RedmiPro();
            default:
                break;
        }
    }

    getSignalStrenth(type: string) {
        switch (type) {
            case "redmi6":
                return new Redmi6Signal();
            case "redmipro":
                return new RedmiProSignal();
            default:
                break;
        }
    }
}
