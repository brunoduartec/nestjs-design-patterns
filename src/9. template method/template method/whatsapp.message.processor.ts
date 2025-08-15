import { Injectable } from '@nestjs/common';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';
import { AbstractProcessor, MessageData } from './abstract.processor';

@Injectable()
export class WhatsappMessageProcessor extends AbstractProcessor {
  parseData(message: MessageDataDto): Promise<MessageData> {
    const parsedData: MessageData = {
      id: message.messageId,
      content: message.conteudo,
      timestamp: new Date().toISOString(), // assuming 'dataHora' is the correct timestamp property
    };
    return Promise.resolve(parsedData);
  }
  validateData(data: MessageData): boolean {
    if (!data || !data.content) {
      console.error('Invalid data:', data);
      return false;
    }
    return true;
  }
}
