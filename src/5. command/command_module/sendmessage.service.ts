/* eslint-disable @typescript-eslint/require-await */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

//Receiver
@Injectable()
export class SendMessageService {
  async enviarWhatsApp(mensagem: string, messageId: string) {
    console.log(`📲 WhatsApp enviado: ${mensagem}: ${messageId}`);
  }

  async enviarSms(mensagem: string, messageId: string) {
    console.log(`📩 SMS enviado: ${mensagem}: ${messageId}`);
  }
}
