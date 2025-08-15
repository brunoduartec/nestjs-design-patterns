import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalTwilioClient {
  send(to: string, msg: string) {
    console.log(`[Twilio] ${to} -> ${msg}`);
  }
}
