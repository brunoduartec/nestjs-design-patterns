import { Injectable } from '@nestjs/common';
import { IStrategy, StrategyOutputDTO } from '../interfaces/strategy.interface';

@Injectable()
export class TextMessageStrategy implements IStrategy {
  execute(data: any): StrategyOutputDTO {
    // Implement the logic for sending a text message
    console.log('Sending text message:', data);
    return { status: 'success', message: 'Text message sent successfully' };
  }
}
