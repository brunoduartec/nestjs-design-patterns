import { Injectable } from '@nestjs/common';
import { QueueService } from '../queue.service';
import { FlowHandler } from '../flow-handler.interface';
import { FlowContext } from '../flow-context';

@Injectable()
export class SendToQueueHandler implements FlowHandler {
  constructor(private queueService: QueueService) {}

  async process(context: FlowContext): Promise<FlowContext> {
    try {
      await this.queueService.send(context.payload);
      return {
        reason: 'Mensagem enviada para a fila com sucesso',
        shouldProceed: true,};
    } catch (error: Error | any) {
      return {
        ...context,
        shouldProceed: false,
        reason: 'Erro ao enviar para a fila: ' + error?.message,
      };
    }
  }
}