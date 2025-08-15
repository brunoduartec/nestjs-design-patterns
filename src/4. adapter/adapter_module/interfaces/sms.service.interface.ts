export interface SmsService {
  sendSms(to: string, message: string): void;
}
