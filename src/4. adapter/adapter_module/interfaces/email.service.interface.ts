export interface EmailService {
  sendEmail(to: string, subject: string, body: string): void;
}
