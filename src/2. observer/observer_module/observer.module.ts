import { ConcreteObserverA } from './concrete-observerA';
import { ConcreteObserverB } from './concrete-observerB';
import { ObserverController } from './observer.controller';
import { ObserverService } from './observer.service';
import { OBSERVERS } from './observer.tokens';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ConcreteSubject } from './subject';
import { ConcreteGreedyObserver } from './concrete-greedy-observer';

@Module({
  imports: [],
  controllers: [ObserverController],
  providers: [
    ConcreteSubject,
    ConcreteObserverA,
    ConcreteObserverB,
    ConcreteGreedyObserver,
    ObserverService,
    {
      provide: OBSERVERS,
      useFactory: (a: ConcreteObserverA, b: ConcreteObserverB, c:ConcreteGreedyObserver) => [a, b, c],
      inject: [ConcreteObserverA, ConcreteObserverB, ConcreteGreedyObserver],
    },
  ],
})
export class ObserverModule {}
