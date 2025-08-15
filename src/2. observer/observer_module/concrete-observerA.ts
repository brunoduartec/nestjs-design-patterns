import { Observer, EventType, ObserverData, ObserverStatus } from './observer.interface';

//cria um enum de estadps

export class ConcreteObserverA implements Observer {
  eventType: EventType;
  state: ObserverStatus;

  constructor() {
    this.eventType = EventType.ERROR;
    this.state = ObserverStatus.PENDING;
  }

  update(data: ObserverData): void {
    if (data?.eventType == this.eventType) {
      if (typeof data?.info === 'string') {
        console.error(`Error: ${data.info}`);
      } else {
        console.error('Error: Invalid data format');
      }
      this.state = ObserverStatus.ACTIVE;
      return;
    }
  }
}
