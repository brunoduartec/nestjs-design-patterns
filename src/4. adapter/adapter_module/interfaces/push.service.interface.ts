export interface PushService {
  sendPush(to: string, message: string): void;
}
