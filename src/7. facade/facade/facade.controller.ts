/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { FacadeService } from './facade.service';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';

@Controller('facade')
export class FacadeController {
  constructor(private readonly facadeService: FacadeService) {};

  @Post()
    async processar(@Body() data: MessageDataDto) {
    // Call the FacadeService to process the data
    const resultado = await this.facadeService.processar(data);
    return {
      sessionId: resultado.sessionId,
      message: resultado.message ?? null,
    };
  }
}
