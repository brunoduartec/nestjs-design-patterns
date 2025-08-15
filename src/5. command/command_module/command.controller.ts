/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { CommandQueueService } from './command-queue.service';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';
import { randomUUID } from 'crypto';

@Controller('command')
export class CommandController {
    constructor( private readonly commandQueueService: CommandQueueService) {}
  @Post()
  async sendMessage(@Body() data: MessageDataDto) {
    if(data.type){
      const messageId = randomUUID(); // Gera um UUID único

      await this.commandQueueService.addCommand(data.type, data.conteudo, messageId);
      return { 
        messageId: messageId,
        message: 'Mensagem enviada com sucesso!'
       };
    }
    else{
      return { message: 'Tipo é necessario' };
    }
  }
}
