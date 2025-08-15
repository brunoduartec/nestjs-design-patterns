/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { WhatsappMessageProcessor } from './whatsapp.message.processor';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';
import { MessageSentResponseDto } from 'src/shared/dtos/message.sent.dto';

@Controller('template')
export class TemplateController {
  constructor(
    private readonly whatsappMessageProcessor: WhatsappMessageProcessor
  ) {}

  @Post()
  async handleTemplateMessage(
    @Body() messageData: MessageDataDto
  ): Promise<MessageSentResponseDto> {
    const messageSent:MessageSentResponseDto  = await this.whatsappMessageProcessor.templateMethod(messageData);

    if (!messageSent.messageId) {
      throw new Error('Failed to process message');
    }

    return messageSent
  }
}
