/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Inject, Post } from '@nestjs/common';
import { NotifierInterface } from './interfaces/notifier.interface';
import { NOTIFIER_TOKEN } from './notification.provider';

@Controller('decorator')
export class DecoratorController {
  constructor(
    @Inject(NOTIFIER_TOKEN) private readonly notifier: NotifierInterface
  ) {}

  @Post()
  handleDecorator() {
    // This method can be used to trigger the decorator functionality
    // For example, you could call a service that uses the NotifierDecorator
    this.notifier.notify('Decorator functionality triggered');
    return { message: 'success' };
  }
}
