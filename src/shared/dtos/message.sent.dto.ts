/* eslint-disable @typescript-eslint/no-unsafe-call */
// dto/message-sent-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class MessageSentResponseDto {
  @ApiProperty({ example: 'abc123', type: String })
  messageId!: string;

  @ApiProperty({ example: 'Mensagem enviada com sucesso!' })
  content: string;

  @ApiProperty({ example: '2025-07-17T19:31:00.000Z' })
  timestamp: string;
}