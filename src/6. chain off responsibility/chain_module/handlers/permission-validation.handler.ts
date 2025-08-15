import { FlowContext } from '../flow-context';
import { FlowHandler } from '../flow-handler.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionValidationHandler implements FlowHandler {
  async process(context: FlowContext): Promise<FlowContext> {
    const canTalk: string | undefined = context.payload?.cliente?.podeFalar;
    if (!canTalk) {
      return {
        ...context,
        shouldProceed: true,
        reason: 'Cliente pode falar',
      };
    }
    return context;
  }
}
