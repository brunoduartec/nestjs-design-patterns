import { Injectable } from '@nestjs/common';
import { EmailService } from '../interfaces/email.service.interface';
import { FakeEmailClient } from '../external/fake-email-client';

@Injectable()
export class NodemailerEmailAdapter implements EmailService {
  constructor(private readonly client: FakeEmailClient) {}

  sendEmail(to: string, subject: string, body: string): void {
    this.client.dispatch(to, subject, body);
  }
}
