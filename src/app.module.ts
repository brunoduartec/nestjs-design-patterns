import { TemplateModule } from './9. template method/template method/template.module';
import { DecoratorModule } from './8. decorator/decorator/decorator.module';
import { FacadeModule } from './7. facade/facade/facade.module';
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StrategyModule } from './1. strategy/strategy_module/strategy.module';
import { ObserverModule } from './2. observer/observer_module/observer.module';
import { BuilderModule } from './3. builder/builder_module/builder.module';
import { AdapterModule } from './4. adapter/adapter_module/adapter.module';
import { AdapterParserModule } from './4. adapter/adapter_parser_module/adapterparser.module';
import { CommandModule } from './5. command/command_module/command.module';
import { ChainModule } from './6. chain off responsibility/chain_module/chain.module';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
        maxRetriesPerRequest: null, // 👈 necessário para BullMQ
      },
    }),
    StrategyModule,
    ObserverModule,
    BuilderModule,
    AdapterParserModule,
    AdapterModule,
    CommandModule,
    ChainModule,
    FacadeModule,
    DecoratorModule,
    TemplateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
