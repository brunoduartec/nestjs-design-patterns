import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  async send(payload: any) {
    // Simula envio para a fila
    console.log('Enviando para fila:', payload);
    // throw new Error('Simulando erro de envio'); // descomente para testar fallback
  }
}
