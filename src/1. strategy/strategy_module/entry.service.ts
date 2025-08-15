/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { StrategyContextService } from './strategy.context.service';
import { StrategyOutputDTO } from './interfaces/strategy.interface';

interface SendMessageDTO {
  text?: any;
  templateName?: string;
  templateParams?: string[];
  type: string;
}

@Injectable()
export class EntryService {
  constructor(
    private readonly strategyContextService: StrategyContextService
  ) {}

    sendMessage(data: SendMessageDTO): StrategyOutputDTO {
    const { type } = data;
    return this.strategyContextService.executeStrategy(type, data);
  }
}
