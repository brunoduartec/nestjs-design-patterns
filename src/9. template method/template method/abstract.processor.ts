/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { MessageProcessor } from './interfaces/message.processor.interfaces';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';
import { v4 as uuidv4 } from 'uuid';
import { MessageSentResponseDto } from 'src/shared/dtos/message.sent.dto';


export interface MessageData {
  id: string;
  content: string;
  timestamp: string;
}

@Injectable()
export abstract class AbstractProcessor implements MessageProcessor {
  async templateMethod(message: MessageDataDto): Promise<MessageSentResponseDto> {
    const parsedData: MessageData = await this.parseData(message);
    if (!this.validateData(parsedData)) {
      throw new Error('Invalid data');
    }
    this.sendMessage(parsedData);
    console.log('Message processed successfully');

    return {
      messageId: this.generateMessageId(),
      content: parsedData.content,
      timestamp: parsedData.timestamp,
    };

  }

  abstract parseData(message: MessageDataDto): Promise<MessageData>;
  abstract validateData(data: any): boolean;

  protected sendMessage(data: any): void {
    // Logic to send the message, e.g., to a queue or external service
    console.log('Sending message:', data);
  }

  protected generateMessageId(): string {
    return uuidv4(); // Generates a unique identifier for the message
  }

}

