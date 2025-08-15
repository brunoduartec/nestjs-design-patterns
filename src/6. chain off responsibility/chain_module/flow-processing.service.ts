import { Injectable } from '@nestjs/common';
import { FlowHandler } from './flow-handler.interface';
import { FlowContext } from './flow-context';
import { MessageDataDto } from '../../shared/dtos/message-data.dto';

@Injectable()
export class FlowProcessingService {
  constructor(private handlers: FlowHandler[]) {}

  async run(initialPayload: MessageDataDto): Promise<FlowContext> {
    let context: FlowContext = {
      payload: initialPayload,
      shouldProceed: true,
    };

    for (const handler of this.handlers) {
      context = await handler.process(context);
      if (!context.shouldProceed) break;
    }

    return context;
  }
}
