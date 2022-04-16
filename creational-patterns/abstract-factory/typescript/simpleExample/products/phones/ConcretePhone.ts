import { Phones } from "./AbstractPhone";

export class Galaxy implements Phones {
    getPhone(): void {
        console.log('-----SAMSUNG GALAXY------');    
    }
};

export class GalaxyA9 implements Phones {
    getPhone(): void {
        console.log('-----SAMSUNG GALAXY A9------');    
    }
};

export class Redmi6 implements Phones {
    getPhone(): void {
        console.log('-----REDMI 6------');    
    }
};

export class RedmiPro implements Phones {
    getPhone(): void {
        console.log('-----REDMI PRO------');    
    }
};