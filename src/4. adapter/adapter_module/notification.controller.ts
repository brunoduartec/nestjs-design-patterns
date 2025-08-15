/* eslint-disable prettier/prettier */
import { Controller, Post, Inject } from '@nestjs/common';
import { SmsService } from './interfaces/sms.service.interface';
import { EmailService } from './interfaces/email.service.interface';
import { PushService } from './interfaces/push.service.interface';

@Controller('adapter')
export class NotificationController {
  constructor(
    @Inject('SmsService') private readonly smsService: SmsService,
    @Inject('EmailService') private readonly emailService: EmailService,
    @Inject('PushService') private readonly pushService: PushService,
  ) {}

  @Post()
  async notifyAll(): Promise<any> {
    await this.smsService.sendSms('+5511999999999', 'SMS de teste enviado!');
    await this.emailService.sendEmail('user@email.com', 'Assunto do email', 'Corpo do email');
    await this.pushService.sendPush('expo-token-abc', 'Mensagem Push!');

    return { message: 'Notificações enviadas com sucesso!'};
  }
}
