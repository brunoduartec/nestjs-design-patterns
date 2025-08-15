import { Command } from "../interfaces/command.interface";
import { SendMessageService } from '../sendmessage.service';


export class SendSmsCommand implements Command {
  constructor(
    private mensagem: string,
    private messageId: string,
    private receiver: SendMessageService, // Receiver
  ) {}

  async execute() {
    await this.receiver.enviarSms(this.mensagem, this.messageId);
  }
}