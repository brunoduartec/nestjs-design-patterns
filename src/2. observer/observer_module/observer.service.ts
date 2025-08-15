/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ConcreteSubject } from './subject';
import { Observer, ObserverData } from './observer.interface';
import { OBSERVERS } from './observer.tokens';

@Injectable()
export class ObserverService {
  constructor(
    private readonly subject: ConcreteSubject,
    @Inject(OBSERVERS) private readonly observers: Observer[]
  ) {
    for (const o of observers) {
      this.subject.attach(o);
    }
  }

  triggerEvent(event: ObserverData): void {
    this.subject.notify(event);
  }
}
