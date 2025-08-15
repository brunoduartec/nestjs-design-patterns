/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';

@Controller('builder')
export class BuilderController {
  constructor(
    private readonly builderService: BuilderService, // Inject the service here
  ) {}

  @Post('')
  send(@Body() body: MessageDataDto) {
    return this.builderService.send(body);
  }
}
