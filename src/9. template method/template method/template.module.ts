import { TemplateController } from './template.controller';
import { Module } from '@nestjs/common';
import { WhatsappMessageProcessor } from './whatsapp.message.processor';

@Module({
  imports: [],
  controllers: [TemplateController],
  providers: [WhatsappMessageProcessor],
})
export class TemplateModule {}
