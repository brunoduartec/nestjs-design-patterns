/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, OnModuleInit } from '@nestjs/common';
import { Queue, Worker, Job } from 'bullmq';
import IORedis from 'ioredis';

import { SendMessageService } from './sendmessage.service';
import { CommandInvokerService } from './command-invoker.service';
import { SendWhatsAppCommand } from './commands/send-whatsapp.command';
import { SendSmsCommand } from './commands/send-sms.command';
import { Command } from './interfaces/command.interface';

@Injectable()
export class CommandQueueService implements OnModuleInit {
  private queue: Queue;

  constructor(
    private readonly receiver: SendMessageService,
    private readonly invoker: CommandInvokerService
  ) {}

   onModuleInit() {
    const connection = new IORedis({ maxRetriesPerRequest: null });

    this.queue = new Queue('envio', { connection });

    new Worker(
      'envio',
      async (job: Job<{ type: string; mensagem: string, messageId: string }>) => {
        const { type, mensagem, messageId } = job.data;
        let command: Command;

        if (type === 'whatsapp') {
          command = new SendWhatsAppCommand(mensagem, messageId, this.receiver);
        } else {
          command = new SendSmsCommand(mensagem, messageId, this.receiver);
        }

        await this.invoker.invoke(command);
      },
      {
        connection,
        limiter: {
          max: 1,
          duration: 1000,
        },
      }
    );
  }

  async addCommand(type: string, mensagem: string, messageId: string) {
    await this.queue.add('enviar', { type, mensagem, messageId });
  }
}
