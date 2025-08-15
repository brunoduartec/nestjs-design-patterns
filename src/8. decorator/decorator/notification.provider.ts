import { Provider } from '@nestjs/common';
import { NotifierService } from './notifiier.service';
import { LogNotifier } from './lognotifiier.decorator';
import { RetryNotifier } from './retry.decorator';

export const NOTIFIER_TOKEN = Symbol('NOTIFIER_TOKEN');

export const NotifierProvider: Provider = {
  provide: NOTIFIER_TOKEN,
  useFactory: () => {
    const base = new NotifierService();
    const withLog = new LogNotifier(base);
    const withRetry = new RetryNotifier(withLog);
    return withRetry;
  },
};
