import { Observer, EventType, ObserverData, ObserverStatus } from './observer.interface';

//cria um enum de estadps

export class ConcreteObserverB implements Observer {
  eventType: EventType;
  state: ObserverStatus;

  constructor() {
    this.eventType = EventType.INFO;
    this.state = ObserverStatus.PENDING;
  }

  update(data: ObserverData): void {
    if (data?.eventType == this.eventType) {
      if (typeof data?.info === 'string') {
        console.log(`Info: ${data.info}`);
      } else {
        console.log('Error: Invalid data format');
      }
      this.state = ObserverStatus.ACTIVE;
      return;
    }
  }
}
