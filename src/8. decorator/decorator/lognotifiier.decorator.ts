import { NotifierDecorator } from './notifier.decorator';

export class LogNotifier extends NotifierDecorator {
  notify(message: string): void {
    console.log('[Log] Antes de enviar a notificação');
    this.wrappee.notify(message);
    console.log('[Log] Depois de enviar a notificação');
  }
}
