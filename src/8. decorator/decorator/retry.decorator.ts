import { NotifierDecorator } from './notifier.decorator';

export class RetryNotifier extends NotifierDecorator {
  notify(message: string): void {
    const maxRetries = 3;
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        console.log(`[Retry] Tentativa ${attempt + 1} de enviar a notificação`);
        this.wrappee.notify(message);
        console.log('[Retry] Notificação enviada com sucesso');
        return;
      } catch (err) {
        attempt++;
        console.warn(`[Retry] Tentativa ${attempt} falhou.`);
        if (attempt === maxRetries) {
          throw err;
        }
      }
    }
  }
}