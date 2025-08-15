import { Injectable } from '@nestjs/common';
import { NotifierInterface } from './interfaces/notifier.interface';

@Injectable()
export abstract class NotifierDecorator implements NotifierInterface {
  constructor(protected readonly wrappee: NotifierInterface) {}

  abstract notify(message: string): void;
}
