/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ClienteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiPropertyOptional({ type: Boolean })
  @IsBoolean()
  @IsOptional()
  podeFalar: boolean;
}

export class MessageDataDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  messageId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  canal?: string;

  @ApiProperty({ type: () => ClienteDto })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ClienteDto)
  cliente: ClienteDto;

  @ApiPropertyOptional({ type: 'object', additionalProperties: true })
  @IsOptional()
  @IsObject()
  metadados?: Record<string, any>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type?: string;
}
