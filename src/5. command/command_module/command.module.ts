import { CommandController } from './command.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

import { SendMessageService } from './sendmessage.service';
import { CommandInvokerService } from './command-invoker.service';
import { CommandQueueService } from './command-queue.service';

@Module({
    imports: [],
    controllers: [
        CommandController,],
    providers: [SendMessageService, CommandInvokerService, CommandQueueService],
    exports: [SendMessageService]
})
export class CommandModule { }
