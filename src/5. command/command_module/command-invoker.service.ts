/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Command } from './interfaces/command.interface';

@Injectable()
export class CommandInvokerService {
  async invoke(command: Command) {
    await command.execute();
  }
}
