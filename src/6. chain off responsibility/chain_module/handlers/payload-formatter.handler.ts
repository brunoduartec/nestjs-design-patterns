import { MessageDataDto } from '../../../shared/dtos/message-data.dto';
import { FlowContext } from '../flow-context';
import { FlowHandler } from '../flow-handler.interface';
import { Injectable } from '@nestjs/common';
import { OutputDataDto } from '../dtos/output-data.dto';

@Injectable()
export class PayloadFormatterHandler implements FlowHandler {
  async process(context: FlowContext): Promise<FlowContext> {
    const payload: MessageDataDto = context.payload as MessageDataDto;
    
    const output: OutputDataDto = {
      cliente_id: payload.cliente.id,
      conteudo: payload.conteudo,
      metadados: payload.metadados || {},
    };

    return {
      payload: output,
      shouldProceed: true,
      reason: 'Payload formatted successfully',
    }
  }
}