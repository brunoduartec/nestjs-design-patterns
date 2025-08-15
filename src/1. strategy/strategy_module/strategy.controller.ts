/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { EntryService } from './entry.service';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';

@Controller('strategy')
export class StrategyController {
  constructor(private readonly entryService: EntryService) {}

  @Post('')
  handleRequest(@Body() body: MessageDataDto) {
   return this.entryService.sendMessage({
      text: body.conteudo,
      templateName: body?.metadados?.templateName ?? '',
      templateParams: [body?.metadados?.templateParam ?? ''],
      type: body.type ?? '',
    });
  } 
}
