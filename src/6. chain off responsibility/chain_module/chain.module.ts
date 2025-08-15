// flow-processing.module.ts
import { Module } from '@nestjs/common';
import { FlowProcessingService } from './flow-processing.service';
import { CircuitBreakerHandler } from './handlers/circuit-breaker.handler';
import { PermissionValidationHandler } from './handlers/permission-validation.handler';
import { PayloadFormatterHandler } from './handlers/payload-formatter.handler';
import { SendToQueueHandler } from './handlers/send-to-queue.handler';
import { QueueService } from './queue.service';
import { ConfigService } from '@nestjs/config';
import { ChainController } from './chain.controller';

@Module({
  providers: [
    ConfigService,
    QueueService,
    CircuitBreakerHandler,
    PermissionValidationHandler,
    PayloadFormatterHandler,
    SendToQueueHandler,
    {
      provide: FlowProcessingService,
      useFactory: (
        circuit: CircuitBreakerHandler,
        permission: PermissionValidationHandler,
        formatter: PayloadFormatterHandler,
        sender: SendToQueueHandler
      ) => new FlowProcessingService([circuit, permission, formatter, sender]),
      inject: [
        CircuitBreakerHandler,
        PermissionValidationHandler,
        PayloadFormatterHandler,
        SendToQueueHandler,
      ],
    },
  ],
  controllers: [ChainController],
  exports: [FlowProcessingService],
})
export class ChainModule {}
