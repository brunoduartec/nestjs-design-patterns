import { Module } from '@nestjs/common';

import { ExternalTwilioClient } from './external/external-twilio-client';
import { FakeEmailClient } from './external/fake-email-client';
import { FakePushClient } from './external/fake-push-client';

import { TwilioSmsAdapter } from './adapters/twilio-sms.adapter';
import { NodemailerEmailAdapter } from './adapters/nodemailer-email.adapter';
import { ExpoPushAdapter } from './adapters/expo-push.adapter';
import { NotificationController } from './notification.controller';

@Module({
  providers: [
    // External clients (agora @Injectable)
    ExternalTwilioClient,
    FakeEmailClient,
    FakePushClient,

    // Adapters
    TwilioSmsAdapter,
    NodemailerEmailAdapter,
    ExpoPushAdapter,

    // Bindings por token
    { provide: 'SmsService', useClass: TwilioSmsAdapter },
    { provide: 'EmailService', useClass: NodemailerEmailAdapter },
    { provide: 'PushService', useClass: ExpoPushAdapter },
  ],
  exports: ['SmsService', 'EmailService', 'PushService'],
  controllers: [NotificationController],
})
export class AdapterModule {}
