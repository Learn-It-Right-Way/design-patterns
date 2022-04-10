import Singleton from "./Singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

if (instance1 === instance2) {
    console.log("----EQUALS----");
} else {
    console.log("--------NOT EQUALS------");
}
