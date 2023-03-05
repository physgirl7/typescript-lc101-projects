import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass (items: Payload[]): number{
        let totalPayloadKg = 0;
        for (let i=0; i < items.length; i++){
            totalPayloadKg = totalPayloadKg + items[i].massKg;
        }
        return totalPayloadKg;
    }

    currentMassKg(): number{
        let cargoKg = this.sumMass(this.cargoItems);
        let astronautKg = this.sumMass(this.astronauts);
        let currentMassTotal = cargoKg + astronautKg;
        return currentMassTotal;
    }

    canAdd (item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut (astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
    
}