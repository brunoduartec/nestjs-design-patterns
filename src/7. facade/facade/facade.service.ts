/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { MessageDataDto } from 'src/shared/dtos/message-data.dto';
import { SessionDTO, SessionService } from './session.service';
import { MessageSenderService } from './message.sender.service';

interface ProcessResult {
  sessionId?: string | null;
  message?: string;
}

@Injectable()
export class FacadeService {
  constructor(
    private readonly sessionService: SessionService,
    private readonly messageSenderService: MessageSenderService
  ) {}

  public async processar(data: MessageDataDto): Promise<ProcessResult> {
    let session: SessionDTO | undefined = await this.sessionService.getSession(data.cliente.id);
    if (!session) {
      session = await this.sessionService.createSession(data.cliente.id);
    }

    // Simulate some processing logic
    if (data.type === 'important') {
      this.messageSenderService.sendMessage(data.conteudo);
      return {
        sessionId: session.id,
        message: 'Message processed successfully',
      };
    } else {
      return { 
        sessionId: null, 
        message: 'Message type is not important' };
    }
  }
}
