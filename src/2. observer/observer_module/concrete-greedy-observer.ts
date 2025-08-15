import { Observer, ObserverData } from "./observer.interface";


export class ConcreteGreedyObserver implements Observer {
    update(data: ObserverData): void{
        console.log("PEGUEI O EVENTO", data)
    }

    // Implementation details for the ConcreteGreedyObserver
}
