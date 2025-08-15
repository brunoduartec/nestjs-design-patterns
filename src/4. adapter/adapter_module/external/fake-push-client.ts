import { Injectable } from '@nestjs/common';

@Injectable()
export class FakePushClient {
  push(to: string, payload: string) {
    console.log(`[Push] ${to} -> ${payload}`);
  }
}
