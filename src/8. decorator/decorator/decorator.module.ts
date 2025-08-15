import { DecoratorController } from './decorator.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { NotifierProvider } from './notification.provider';

@Module({
  controllers: [DecoratorController],
  providers: [NotifierProvider],
  exports: [NotifierProvider],
})
export class DecoratorModule {}
