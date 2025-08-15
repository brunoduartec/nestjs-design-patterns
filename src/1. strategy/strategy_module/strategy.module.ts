import { StrategyController } from './strategy.controller';
import { EntryService } from './entry.service';
import { TemplateMessageStrategy } from './strategies/template-message.strategy';
import { TextMessageStrategy } from './strategies/text-message.strategy';
import { StrategyContextService } from './strategy.context.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StrategyController],
  providers: [
    EntryService,
    StrategyContextService,
    TextMessageStrategy,
    TemplateMessageStrategy,
  ],
})
export class StrategyModule {}
