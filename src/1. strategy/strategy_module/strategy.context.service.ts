/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { IStrategy, StrategyOutputDTO } from './interfaces/strategy.interface';
import { TextMessageStrategy } from './strategies/text-message.strategy';
import { TemplateMessageStrategy } from './strategies/template-message.strategy';

@Injectable()
export class StrategyContextService {
  private strategies: Map<string, IStrategy> = new Map<string, IStrategy>();

  constructor(
    private readonly textMessageStrategy: TextMessageStrategy,
    private readonly templateMessageStrategy: TemplateMessageStrategy,
  ) {
    this.strategies.set('text', this.textMessageStrategy);
    this.strategies.set('template', this.templateMessageStrategy);
  }

  getStrategy(type: string): IStrategy {
    const strategy = this.strategies.get(type);
    if (!strategy) {
      throw new BadRequestException(
        `Strategy not found for type: ${type}. Valores aceitos: "text" ou "template".`,
      );
    }
    return strategy;
  }

  executeStrategy(type: string, data: any): StrategyOutputDTO {
    const strategy = this.getStrategy(type);
    return strategy.execute(data);
  }
}
