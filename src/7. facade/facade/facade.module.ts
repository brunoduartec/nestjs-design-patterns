/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

import { FacadeController } from './facade.controller';
import { FacadeService } from './facade.service';
import { SessionService } from './session.service';
import { MessageSenderService } from './message.sender.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
        ttl: 3000
    }),
  ],
  controllers: [FacadeController],
  providers: [FacadeService, SessionService, MessageSenderService],
})
export class FacadeModule {}
