import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageSenderService {
  public sendMessage(message: string): void {
    console.log(`Message sent: ${message}`);
  }
}
