/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Param } from '@nestjs/common';
import { ParserService } from './parser.service';
import { ApiTags, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('parser')
@Controller('parser')
export class AdapterParserController {
  constructor(private readonly parserService: ParserService) {}

  @Post(':providerName')
  @ApiParam({
    name: 'providerName',
    required: true,
    description: 'Nome do provider para o parser (ex.: providerA, providerB)',
    schema: { type: 'string' },
  })
  @ApiBody({
    description: 'Payload bruto recebido do provider para ser parseado',
    schema: { type: 'object', additionalProperties: true },
  })
  @ApiResponse({ status: 201, description: 'Dados parseados com sucesso.' })
  @ApiResponse({ status: 400, description: 'Provider ausente ou inválido.' })
  @ApiResponse({
    status: 404,
    description: 'Adapter para o provider não encontrado.',
  })
  parseData(@Param() params: { providerName: string }, @Body() body: any): any {
    const adapterName = params.providerName;

    if (!adapterName) {
      throw new Error('Provider name is required');
    }

    const parse = this.parserService.parseData(adapterName, body);
    return parse;
  }
}
