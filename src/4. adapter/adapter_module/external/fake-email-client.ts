import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeEmailClient {
  dispatch(to: string, subject: string, content: string) {
    console.log(`[Email] ${to}: ${subject} -> ${subject} - ${content}`);
  }
}
