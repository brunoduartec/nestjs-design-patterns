/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { FlowProcessingService } from './flow-processing.service';
import { MessageDataDto } from '../../shared/dtos/message-data.dto';

@Controller('chain')
export class ChainController {
  constructor(private readonly flowProcessor: FlowProcessingService) {}

  @Post('')
  async processar(@Body() data: MessageDataDto) {
    const resultado = await this.flowProcessor.run(data);
    return {
      status: resultado.shouldProceed ? 'processado' : 'ignorado',
      reason: resultado.reason ?? null,
    };
  }
}
