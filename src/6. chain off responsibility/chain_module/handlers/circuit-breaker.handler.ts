import { FlowContext } from '../flow-context';
import { FlowHandler } from '../flow-handler.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CircuitBreakerHandler implements FlowHandler {
  constructor(private config: ConfigService) {}

  async process(context: FlowContext): Promise<FlowContext> {
    const isOpen = this.config.get<boolean>('features.circuitBreaker');
    if (isOpen) {
      return { ...context, shouldProceed: false, reason: 'Circuit Breaker ativo' };
    }
    return context;
  }
}