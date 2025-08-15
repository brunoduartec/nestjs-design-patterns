/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  IsDefined,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString
} from 'class-validator';

export class OutputDataDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  cliente_id: string;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsOptional()
  @IsObject()
  metadados?: Record<string, any>;
}
