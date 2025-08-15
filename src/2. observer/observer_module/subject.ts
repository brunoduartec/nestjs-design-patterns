import { Observer, ObserverData } from './observer.interface';
import { Subject } from './subject.interface';

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log('Observer has been attached already.');
      return;
    }
    console.log('Attached an observer.');
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Nonexistent observer.');
      return;
    }
    this.observers.splice(observerIndex, 1);
    console.log('Detached an observer.');
  }
  notify(data: ObserverData): void {
    console.log('Notifying observers...');
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}
